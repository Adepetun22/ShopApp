import express from 'express';
import Product from '../models/Product.js';
import Order from '../models/Order.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

// Apply auth to all routes
router.use(protect);

// @route   GET /api/cart
// @desc    Get user's cart
// @access  Private
router.get('/', async (req, res, next) => {
  try {
    // Get latest cart from orders or database
    // For now, return cart items stored in user session or local storage
    res.json({
      success: true,
      cartItems: req.user.cart || []
    });
  } catch (error) {
    next(error);
  }
});

// @route   POST /api/cart
// @desc    Add item to cart
// @access  Private
router.post('/', async (req, res, next) => {
  try {
    const { productId, quantity = 1, size, color } = req.body;

    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: 'Product not found'
      });
    }

    // Check stock
    if (product.stock < quantity) {
      return res.status(400).json({
        success: false,
        message: 'Insufficient stock'
      });
    }

    // Build cart item
    const cartItem = {
      product: product._id,
      name: product.name,
      price: product.price,
      image: product.images[0]?.url,
      quantity,
      size,
      color,
      stock: product.stock
    };

    // Get user's current cart
    let cart = req.user.cart || [];

    // Check if item exists
    const existingIndex = cart.findIndex(
      item => item.product.toString() === productId && 
              item.size === size && 
              item.color === color
    );

    if (existingIndex > -1) {
      cart[existingIndex].quantity += quantity;
    } else {
      cart.push(cartItem);
    }

    // Update user cart
    await req.user.save();

    res.status(201).json({
      success: true,
      cartItems: cart
    });
  } catch (error) {
    next(error);
  }
});

// @route   PUT /api/cart
// @desc    Update cart item quantity
// @access  Private
router.put('/', async (req, res, next) => {
  try {
    const { productId, quantity, size, color } = req.body;

    let cart = req.user.cart || [];
    const itemIndex = cart.findIndex(
      item => item.product.toString() === productId && 
              item.size === size && 
              item.color === color
    );

    if (itemIndex === -1) {
      return res.status(404).json({
        success: false,
        message: 'Item not found in cart'
      });
    }

    // Check stock
    const product = await Product.findById(productId);
    if (quantity > product.stock) {
      return res.status(400).json({
        success: false,
        message: 'Insufficient stock'
      });
    }

    cart[itemIndex].quantity = quantity;
    await req.user.save();

    res.json({
      success: true,
      cartItems: cart
    });
  } catch (error) {
    next(error);
  }
});

// @route   DELETE /api/cart/:productId
// @desc    Remove item from cart
// @access  Private
router.delete('/:productId', async (req, res, next) => {
  try {
    const { size, color } = req.query;

    let cart = req.user.cart || [];
    cart = cart.filter(
      item => !(item.product.toString() === req.params.productId && 
                item.size === size && 
                item.color === color)
    );

    await req.user.save();

    res.json({
      success: true,
      cartItems: cart
    });
  } catch (error) {
    next(error);
  }
});

// @route   DELETE /api/cart
// @desc    Clear cart
// @access  Private
router.delete('/', async (req, res, next) => {
  try {
    req.user.cart = [];
    await req.user.save();

    res.json({
      success: true,
      cartItems: []
    });
  } catch (error) {
    next(error);
  }
});

// @route   POST /api/cart/checkout
// @desc    Create order from cart
// @access  Private
router.post('/checkout', async (req, res, next) => {
  try {
    const { shippingAddress, paymentMethod } = req.body;

    let cart = req.user.cart || [];

    if (cart.length === 0) {
      return res.status(400).json({
        success: false,
        message: 'Cart is empty'
      });
    }

    // Validate stock for all items
    for (const item of cart) {
      const product = await Product.findById(item.product);
      if (!product || product.stock < item.quantity) {
        return res.status(400).json({
          success: false,
          message: `Insufficient stock for ${item.name}`
        });
      }
    }

    // Create order
    const orderItems = cart.map(item => ({
      product: item.product,
      name: item.name,
      price: item.price,
      quantity: item.quantity,
      image: item.image,
      size: item.size,
      color: item.color
    }));

    const order = await Order.create({
      user: req.user.id,
      orderItems,
      shippingAddress,
      paymentMethod
    });

    // Clear cart
    req.user.cart = [];
    await req.user.save();

    res.status(201).json({
      success: true,
      order
    });
  } catch (error) {
    next(error);
  }
});

export default router;

