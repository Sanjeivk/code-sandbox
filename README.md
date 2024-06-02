# Python Code Execution Website

## Table of Contents

1. [Project Overview](#project-overview)
2. [Technologies Used](#technologies-used)
3. [Features](#features)
4. [Setup Instructions](#setup-instructions)
   - [Prerequisites](#prerequisites)
   - [Backend Setup](#backend-setup)
   - [Frontend Setup](#frontend-setup)
   - [Database Setup](#database-setup)
5. [Access the Application](#access-the-application)
6. [Contact](#contact)
7. [Video Guide](#video-guide)

## Project Overview

This project is a web application that allows users to write, test, and submit Python 3 code. Users can see the result of running their code in real-time. The application consists of a React frontend and a FastAPI backend, ensuring a seamless code execution experience.

## Technologies Used

- **Frontend**: React (Vite), TypeScript, Tailwind CSS, Monaco Editor
- **Backend**: FastAPI, Python 3.11
- **Database**: PostgreSQL
- **Other**: Docker, Docker Compose

## Features

- **Code Editor**: Integrated Monaco Editor for writing Python code.
- **Test Code**: Execute code and view output without saving.
- **Submit Code**: Validate, execute, and save code with execution results in the database.
- **Security**: Sandbox execution using Docker, with timeout and resource limits.

## Setup Instructions

### Prerequisites

- Docker and Docker Compose installed
- Node.js and npm installed

### Backend Setup

1. **Navigate to the backend directory**:
   ```sh
    cd backend
   ```
2. **Build and start the backend services**
    ```sh 
    docker-compose up --build
    ```

### Frontend Setup

1. **Navigate to the frontend directory**:
   ```sh
    cd frontend
   ```
2. **Install Dependencies**
    ```sh 
    npm install
    ```
3. **Start the development server**
    ```sh 
    npm run dev
    ```

### Database Setup

- **host**: localhost
- **port**: 5432
- **username**: user
- **password**: password
- **database name**: code_execution

### Prerequisites

Frontend: Open your browser and navigate to http://localhost:5173
Backend API Docs: Open your browser and navigate to http://localhost:8000/docs for the FastAPI documentation.

### Contact
For any questions or issues, please contact s68krish@uwaterloo.ca

### Video Guide
[Add your video guide here]