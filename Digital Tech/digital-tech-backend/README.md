# Digital Tech FastAPI + PostgreSQL starter

## Requirements
- Python 3.10+
- PostgreSQL installed and running

## 1. Create the database
In pgAdmin, create a database named `digital_tech`. Or run `CREATE DATABASE digital_tech;` in the PostgreSQL query tool.

## 2. Open this folder in VS Code
Open the `digital-tech-backend` folder (the folder containing `requirements.txt`).

## 3. Create and activate a virtual environment (Windows PowerShell)
```powershell
py -m venv .venv
.\.venv\Scripts\Activate.ps1
```
If PowerShell blocks activation, use Command Prompt:
```cmd
.venv\Scripts\activate.bat
```

## 4. Install packages
```powershell
python -m pip install --upgrade pip
pip install -r requirements.txt
```

## 5. Configure database access
Copy `.env.example` to `.env`. Replace `YOUR_PASSWORD` with your local PostgreSQL password:
```env
DATABASE_URL=postgresql+psycopg://postgres:MyLocalPassword@localhost:5432/digital_tech
FRONTEND_ORIGINS=http://127.0.0.1:5500,http://localhost:5500
```
Never commit `.env` or share your database password. `.gitignore` excludes it.

## 6. Start FastAPI
From this folder:
```powershell
uvicorn app.main:app --reload
```
Open `http://127.0.0.1:8000/` for the health check and `http://127.0.0.1:8000/docs` for interactive API documentation.

On first startup, this starter creates `general_enquiries` and `business_consultations`.

## Endpoints
- `POST /api/enquiries/general`
- `POST /api/enquiries/business`

We will connect the existing HTML forms and preserve WhatsApp behavior in a later stage. This is a local learning starter, not production-ready; before public deployment we will add migrations, spam protection, logging, and production secret management.
