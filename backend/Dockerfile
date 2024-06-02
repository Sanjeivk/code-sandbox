# Dockerfile
FROM python:3.11

# Install dependencies
RUN pip install fastapi uvicorn==0.22.0 sqlalchemy databases psycopg2-binary pandas scipy requests==2.31.0

# Copy application code
COPY . /app
WORKDIR /app

# Command to run the FastAPI application
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]

