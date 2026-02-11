import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import authRoutes from './routes/auth.js';
import productRoutes from './routes/products.js';
import cartRoutes from './routes/cart.js';
import orderRoutes from './routes/orders.js';
import errorHandler from './middleware/errorHandler.js';

dotenv.config();

const app = express();

// Connect to MongoDB
connectDB();

// CORS configuration - allow multiple origins for development and production
const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    
    // Allow localhost for development
    const localhostPattern = /^http:\/\/(localhost|127\.0\.0\.1):\d+$/;
    if (localhostPattern.test(origin)) {
      return callback(null, true);
    }
    
    // Allow Netlify deployments (wildcard subdomains)
    const netlifyPattern = /^https:\/\/[a-zA-Z0-9-]+\.netlify\.app$/;
    if (netlifyPattern.test(origin)) {
      return callback(null, true);
    }
    
    // Allow Vercel deployments
    const vercelPattern = /^https:\/\/[a-zA-Z0-9-]+\.vercel\.app$/;
    if (vercelPattern.test(origin)) {
      return callback(null, true);
    }
    
    // Allow any render.com deployment
    const renderPattern = /^https:\/\/[a-zA-Z0-9-]+\.onrender\.com$/;
    if (renderPattern.test(origin)) {
      return callback(null, true);
    }
    
    // Allow any herokuapp.com deployment
    const herokuPattern = /^https:\/\/[a-zA-Z0-9-]+\.herokuapp\.com$/;
    if (herokuPattern.test(origin)) {
      return callback(null, true);
    }
    
    // For development, allow all (remove this in production for security)
    if (process.env.NODE_ENV !== 'production') {
      return callback(null, true);
    }
    
    callback(new Error('Not allowed by CORS'));
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/orders', orderRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running', timestamp: new Date() });
});

// Error Handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📝 Environment: ${process.env.NODE_ENV || 'development'}`);
});

