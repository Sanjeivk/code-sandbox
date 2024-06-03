# 🐍 Python Code Execution Website
## 🚀 Project Overview

This project is a web application that allows users to write, test, and submit Python 3 code. Users can see the result of running their code in real-time. The application consists of a React frontend and a FastAPI backend, ensuring a seamless code execution experience.

## 🌟 Features

- **📝 Code Editor**: Integrated Monaco Editor for writing Python code.
- **🚀 Test Code**: Execute code and view output without saving.
- **📥 Submit Code**: Validate, execute, and save code with execution results in the database.
- **🔒 Security**: Sandbox execution using Docker, with timeout and resource limits.

## 🛠️ Setup Instructions

### ⚙️ Prerequisites

- Docker and Docker Compose installed
- Node.js and npm installed

### 🐍 Backend Setup

1. **Navigate to the backend directory and Build the backend services**:
   ```sh
   cd backend && docker compose up --build
   ```

### 💻 Frontend Setup

1. **Navigate to the frontend directory, Install Dependencies and Start the development server**:
   ```sh
   cd frontend && npm install && npm run dev
   ```

### 🗄️ Database Setup

- **host**: localhost
- **port**: 5432
- **username**: user
- **password**: password
- **database name**: code_execution

### 🌐 Access the Application

Frontend: Open your browser and navigate to http://localhost:5173
Backend API Docs: Open your browser and navigate to http://localhost:8000/docs for the FastAPI documentation.

### 📧 Contact
For any questions or issues, please contact s68krish@uwaterloo.ca
