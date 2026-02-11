# Netlify Deployment Guide

## ⚠️ Important Architecture Note

This is a **full-stack application** with separate frontend and backend:

- **Frontend**: React/Vite (hosted on Netlify)
- **Backend**: Node.js/Express + MongoDB (must be hosted separately)

Netlify is a **static hosting platform** and cannot run the Node.js backend server. You have two deployment options:

---

## Option 1: Deploy Frontend to Netlify + Backend to Render/Railway/Heroku (Recommended)

### Step 1: Deploy Backend to Render (Free)

1. Create account at [render.com](https://render.com)
2. Connect your GitHub repository
3. Create a new Web Service:
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
4. Add Environment Variables in Render:
   - `MONGODB_URI`: Your MongoDB Atlas connection string
   - `JWT_SECRET`: Generate a random string
   - `PORT`: 5000
5. Deploy and get your backend URL (e.g., `https://shopapp-api.onrender.com`)

### Step 2: Configure Frontend for Production

1. Create a `.env` file in the project root:
   ```env
   VITE_API_URL=https://your-backend-url.onrender.com/api
   ```

2. Build the frontend:
   ```bash
   npm run build
   ```

### Step 3: Deploy Frontend to Netlify

1. Connect your GitHub repository to Netlify
2. **Build Command**: `npm run build`
3. **Publish Directory**: `dist`
4. Add Environment Variable in Netlify:
   - `VITE_API_URL`: `https://your-backend-url.onrender.com/api`

---

## Option 2: Deploy Both to Vercel (Easier Integration)

Vercel handles both frontend and API routes better:

1. Create account at [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Vercel will automatically detect Vite + React
4. Add Environment Variables:
   - `MONGODB_URI`: Your MongoDB Atlas connection string
   - `JWT_SECRET`: Generate a random string
5. Deploy

---

## Local Development

Run both servers locally:

```bash
# Terminal 1 - Backend
cd backend
npm install
npm run dev

# Terminal 2 - Frontend
npm install
npm run dev
```

Or use the helper script:
```bash
./start-dev.sh
```

---

## Environment Variables Summary

| Variable | Local | Production (Render) |
|----------|-------|---------------------|
| `VITE_API_URL` | `http://localhost:5000/api` | `https://your-api.onrender.com/api` |
| `MONGODB_URI` | Your local MongoDB or Atlas URI | Your Atlas URI |
| `JWT_SECRET` | Any random string | Same as local |

---

## Troubleshooting

### CORS Errors
If you get CORS errors in production, update the CORS configuration in `backend/server.js` to include your Netlify URL:

```javascript
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    
    // Add your Netlify URL here
    if (origin === 'https://your-netlify-site.netlify.app') {
      return callback(null, true);
    }
    
    callback(new Error('Not allowed by CORS'));
  },
  // ...
};
```

### Netlify Redirects
Create a `public/_redirects` file in your project root:

```
/*    /index.html   200
```

This ensures React Router works correctly on Netlify.

