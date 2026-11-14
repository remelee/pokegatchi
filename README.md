# Pokegatchi

Django (Python) backend + React (TypeScript) frontend built with Vite.

- `backend/`: Django + Django REST Framework API, runs on http://localhost:8000
- `frontend/`: React + TypeScript app, runs on http://localhost:5173

These instructions are for Windows and use PowerShell.

## 1. Install the tools (one time)

You need Git, Python, and Node.js. To check what you already have, open PowerShell and run:

```powershell
git --version
python --version
node --version
```

If any of these say "not recognized", install it:

- **Git:** https://git-scm.com/download/win
- **Python 3.11 or newer:** https://www.python.org/downloads/
  On the first installer screen, tick **"Add python.exe to PATH"**.
- **Node.js (LTS version):** https://nodejs.org/
  Accept the defaults in the installer. This also installs `npm`.

Close and reopen PowerShell after installing so the new tools are found.

## 2. Get the code

```powershell
git clone https://github.com/remelee/pokegatchi.git
cd pokegatchi
```

## 3. Set up the backend

```powershell
cd backend
python -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
python manage.py migrate
```

Your prompt should show `(.venv)` once the virtual environment is active.

If activation fails with a message about scripts being disabled, run this once and try again:

```powershell
Set-ExecutionPolicy -Scope CurrentUser RemoteSigned
```

`migrate` creates your local database (`db.sqlite3`). It isn't shared through git, so everyone has their own.

## 4. Set up the frontend

In a new PowerShell window, from the repo root:

```powershell
cd frontend
npm install
```

## 5. Run the app

You need two PowerShell windows open at the same time.

**Window 1: backend**

```powershell
cd backend
.\.venv\Scripts\Activate.ps1
python manage.py runserver
```

**Window 2: frontend**

```powershell
cd frontend
npm run dev
```

Then open http://localhost:5173 in your browser. Stop either server with `Ctrl+C`.

The frontend forwards any request starting with `/api` to the backend, so there is nothing else to configure.

## Day-to-day

- After pulling changes, run `pip install -r requirements.txt` (in `backend`, with the venv active) and `npm install` (in `frontend`) in case dependencies changed.
- If the models changed, also run `python manage.py migrate`.
- If you add a Python package, update the list with `pip freeze > requirements.txt` and commit it.

## Troubleshooting

- **`python` or `node` is "not recognized":** reopen PowerShell, or reinstall and make sure PATH is ticked (Python).
- **`ModuleNotFoundError` when starting Django:** the venv isn't active or `pip install -r requirements.txt` wasn't run. Check for `(.venv)` in your prompt.
- **Port already in use:** another copy of the server is still running. Close that window or stop it with `Ctrl+C`.
