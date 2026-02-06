# ShopApp Backend

A complete Node.js/Express backend for the ShopApp e-commerce application with MongoDB database.

## 🚀 Features

### Authentication & User Management
- User registration and login
- JWT-based authentication
- Password hashing with bcrypt
- Profile management
- Protected routes with middleware

### Product Management
- CRUD operations for products
- Product search and filtering
- Category and brand filtering
- Price range filtering
- Sorting (price, rating, newest)
- Pagination
- Product reviews and ratings
- Featured products

### Shopping Cart
- Add/remove items
- Update quantities
- Stock validation
- Persistent cart per user
- Size and color selection

### Order Management
- Create orders
- Order history
- Order status tracking
- Payment integration ready
- Admin order management

## 📁 Project Structure

```
backend/
├── config/
│   └── db.js              # MongoDB connection
├── middleware/
│   ├── auth.js            # Authentication middleware
│   └── errorHandler.js    # Error handling
├── models/
│   ├── User.js            # User model with auth methods
│   ├── Product.js         # Product model with reviews
│   └── Order.js           # Order model
├── routes/
│   ├── auth.js            # Authentication routes
│   ├── products.js        # Product routes
│   ├── cart.js            # Cart routes
│   └── orders.js          # Order routes
├── server.js              # Entry point
├── .env.example           # Environment variables template
└── package.json
```

## 🛠️ Installation

### Prerequisites
- Node.js 18+
- MongoDB (local or Atlas)
- npm or yarn

### Setup

1. **Install dependencies:**
   ```bash
   cd backend
   npm install
   ```

2. **Configure environment variables:**
   ```bash
   cp .env.example .env
   # Edit .env with your values
   ```

3. **Start MongoDB:**
   ```bash
   # If local
   mongod

   # Or use MongoDB Atlas connection string
   ```

4. **Start the server:**
   ```bash
   # Development mode
   npm run dev

   # Production mode
   npm start
   ```

## 📡 API Endpoints

### Authentication
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register new user |
| POST | `/api/auth/login` | Login user |
| GET | `/api/auth/me` | Get current user |
| PUT | `/api/auth/profile` | Update profile |
| PUT | `/api/auth/password` | Change password |

### Products
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/products` | Get all products |
| GET | `/api/products/:id` | Get single product |
| GET | `/api/products/featured` | Get featured products |
| GET | `/api/products/categories` | Get categories |
| GET | `/api/products/brands` | Get brands |
| POST | `/api/products` | Create product (admin) |
| PUT | `/api/products/:id` | Update product (admin) |
| DELETE | `/api/products/:id` | Delete product (admin) |
| POST | `/api/products/:id/reviews` | Add review |

### Cart
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/cart` | Get user's cart |
| POST | `/api/cart` | Add item to cart |
| PUT | `/api/cart` | Update cart item |
| DELETE | `/api/cart/:id` | Remove item from cart |
| DELETE | `/api/cart` | Clear cart |
| POST | `/api/cart/checkout` | Create order from cart |

### Orders
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/orders` | Get user's orders |
| GET | `/api/orders/:id` | Get single order |
| POST | `/api/orders` | Create order |
| PUT | `/api/orders/:id/pay` | Mark order as paid |
| PUT | `/api/orders/:id/deliver` | Mark order delivered (admin) |
| PUT | `/api/orders/:id/status` | Update order status (admin) |

## 🔐 Authentication

Include JWT token in requests:

```
Authorization: Bearer <token>
```

## 📝 Environment Variables

| Variable | Description | Default |
|----------|------------|---------|
| PORT | Server port | 5000 |
| NODE_ENV | Environment | development |
| MONGODB_URI | MongoDB connection string | - |
| JWT_SECRET | JWT signing secret | - |
| JWT_EXPIRE | JWT expiration time | 30d |
| FRONTEND_URL | Frontend URL for CORS | http://localhost:5173 |

## 🎯 Portfolio Value

This backend demonstrates:
- ✅ RESTful API design
- ✅ MongoDB/Mongoose ODM
- ✅ JWT authentication
- ✅ MVC architecture
- ✅ Error handling
- ✅ Input validation
- ✅ Protected routes
- ✅ Admin functionality
- ✅ Product filtering & pagination
- ✅ Cart & order management

## 📦 Dependencies

### Main Dependencies
- `express` - Web framework
- `mongoose` - MongoDB ODM
- `bcryptjs` - Password hashing
- `jsonwebtoken` - JWT tokens
- `cors` - CORS middleware
- `dotenv` - Environment variables

### Dev Dependencies
- `nodemon` - Auto-reload in development
- `eslint` - Code linting

## 🚀 Deployment

### Heroku
```bash
heroku create
heroku config:set MONGODB_URI=your_mongodb_uri
heroku config:set JWT_SECRET=your_jwt_secret
git push heroku main
```

### Render/Railway/Vercel
1. Connect your repository
2. Set environment variables in dashboard
3. Deploy automatically

## 📄 License

MIT License

