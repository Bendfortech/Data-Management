# Data-Management

Full management functionality using PHP and the React framework of https://bendfortech.com

## Project structure

- frontend/
  - public/index.html
  - src/App.js
  - src/App.css
  - src/index.js
  - package.json

- backend/
  - api.php

## Run the app

1. Install frontend dependencies:
   ```bash
   cd frontend
   npm install
   ```

2. Start React dev server:
   ```bash
   npm start
   ```

3. Start PHP backend (from workspace root):
   ```bash
   php -S localhost:8000 -t backend
   ```

4. Open the React app at `http://localhost:3000`.

## Notes

- The frontend calls the backend at `http://localhost:8000/api.php`.
- Customize data management features by editing `frontend/src/App.js` and `backend/api.php`.
