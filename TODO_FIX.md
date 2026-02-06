# Fix 400 Bad Request Error - TODO List

## Task: Fix registration 400 error and improve error handling

### ✅ Completed Steps:
1. [x] Add explicit validation in backend `/backend/routes/auth.js`
2. [x] Improve error logging in `/src/AuthContext.jsx`
3. [x] Update `/src/Pages/Signup.jsx` with Alert component and email validation
4. [x] Update `/src/Pages/Login.jsx` with Alert component
5. [x] **Update navigation flow:**
   - Signup success → redirects to Login page after 1.5s delay
   - Login success → redirects to Home page (`/`)

## Changes Summary:
- **Backend (`/backend/routes/auth.js`):**
  - Added explicit validation for required fields (name, email, password)
  - Added email format validation using regex
  - Added password length validation
  - Normalized email to lowercase before lookup and storage
  
- **Frontend (`/src/AuthContext.jsx`):**
  - Added `authAlert` state for alerts
  - Added `showAuthAlert` and `hideAuthAlert` functions
  - Added console logging for debugging
  - Shows alerts on login, register, and logout

- **Frontend (`/src/Pages/Signup.jsx`):**
  - Added email format validation
  - Added name validation
  - Integrated CustomAlert component for notifications

- **Frontend (`/src/Pages/Login.jsx`):**
  - Added email format validation
  - Integrated CustomAlert component for notifications

## Testing:
Run the backend and frontend, then test:
1. Register with valid data → should succeed
2. Register with invalid email → should show error
3. Register with short password → should show error
4. Login with valid credentials → should succeed
5. Check browser console for detailed logs

