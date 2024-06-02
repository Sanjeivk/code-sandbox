from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import subprocess
import uuid
from sqlalchemy import create_engine, Column, String, Text
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

DATABASE_URL = "postgresql://user:password@db:5432/code_execution"

app = FastAPI()

origins = [
    "http://localhost:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()


class CodeExecution(Base):
    __tablename__ = "code_executions"
    id = Column(String, primary_key=True, index=True, default=lambda: str(uuid.uuid4()))
    code = Column(Text, nullable=False)
    output = Column(Text, nullable=False)


Base.metadata.create_all(bind=engine)


class CodeRequest(BaseModel):
    code: str


class CodeResponse(BaseModel):
    output: str


@app.post("/api/test-code", response_model=CodeResponse)
async def test_code(request: CodeRequest):
    try:
        result = subprocess.run(
            ["python3", "-c", request.code], capture_output=True, text=True, timeout=5
        )
        return CodeResponse(output=result.stdout or result.stderr)
    except subprocess.TimeoutExpired:
        raise HTTPException(status_code=400, detail="Code execution timed out")
    except subprocess.CalledProcessError as e:
        raise HTTPException(
            status_code=400, detail=f"Code execution failed: {e.stderr}"
        )
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"An error occurred: {str(e)}")


@app.post("/api/submit-code", response_model=CodeResponse)
async def submit_code(request: CodeRequest):
    db = SessionLocal()
    try:
        compile(request.code, "<string>", "exec")

        result = subprocess.run(
            ["python3", "-c", request.code], capture_output=True, text=True, timeout=5
        )
        output = result.stdout or result.stderr

        code_execution = CodeExecution(
            id=str(uuid.uuid4()), code=request.code, output=output
        )
        db.add(code_execution)
        db.commit()
        db.refresh(code_execution)
        return CodeResponse(output=output)
    except SyntaxError as e:
        raise HTTPException(status_code=400, detail=f"Syntax error: {e}")
    except subprocess.TimeoutExpired:
        raise HTTPException(status_code=400, detail="Code execution timed out")
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"An error occurred: {str(e)}")
    finally:
        db.close()
