import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Product from './models/Product.js';
import User from './models/User.js';
import Order from './models/Order.js';

dotenv.config();

// Sample products
const products = [
  {
    name: 'Premium Cotton T-Shirt',
    description: 'High-quality cotton t-shirt with a comfortable fit. Perfect for everyday wear.',
    price: 29.99,
    originalPrice: 39.99,
    category: 'Clothing',
    subcategory: 'T-Shirts',
    brand: 'Zara',
    images: [{ url: 'https://via.placeholder.com/400', alt: 'T-Shirt' }],
    sizes: [{ size: 'S', stock: 50 }, { size: 'M', stock: 100 }, { size: 'L', stock: 50 }],
    colors: [{ name: 'White', hex: '#FFFFFF' }, { name: 'Black', hex: '#000000' }],
    stock: 200,
    rating: { average: 4.5, count: 120 },
    features: ['100% Cotton', 'Machine Washable', 'Breathable'],
    isFeatured: true,
    isOnSale: true
  },
  {
    name: 'Designer Jeans',
    description: 'Classic fit designer jeans with premium denim quality.',
    price: 79.99,
    category: 'Clothing',
    subcategory: 'Jeans',
    brand: 'Calvin Klein',
    images: [{ url: 'https://via.placeholder.com/400', alt: 'Jeans' }],
    sizes: [{ size: '30', stock: 30 }, { size: '32', stock: 40 }, { size: '34', stock: 35 }],
    colors: [{ name: 'Blue', hex: '#0000FF' }],
    stock: 105,
    rating: { average: 4.7, count: 85 },
    features: ['Premium Denim', 'Classic Fit', 'Durable'],
    isFeatured: true,
    isOnSale: false
  },
  {
    name: 'Leather Handbag',
    description: 'Genuine leather handbag with multiple compartments. Elegant and functional.',
    price: 199.99,
    originalPrice: 249.99,
    category: 'Accessories',
    subcategory: 'Bags',
    brand: 'Gucci',
    images: [{ url: 'https://via.placeholder.com/400', alt: 'Handbag' }],
    colors: [{ name: 'Brown', hex: '#8B4513' }, { name: 'Black', hex: '#000000' }],
    stock: 25,
    rating: { average: 4.8, count: 45 },
    features: ['Genuine Leather', 'Multiple Compartments', 'Adjustable Strap'],
    isFeatured: true,
    isOnSale: true
  },
  {
    name: 'Running Sneakers',
    description: 'Lightweight running sneakers with excellent cushioning and support.',
    price: 129.99,
    category: 'Footwear',
    subcategory: 'Sneakers',
    brand: 'Nike',
    images: [{ url: 'https://via.placeholder.com/400', alt: 'Sneakers' }],
    sizes: [{ size: '8', stock: 20 }, { size: '9', stock: 25 }, { size: '10', stock: 20 }],
    colors: [{ name: 'White', hex: '#FFFFFF' }, { name: 'Black', hex: '#000000' }],
    stock: 65,
    rating: { average: 4.6, count: 200 },
    features: ['Lightweight', 'Cushioned Sole', 'Breathable Mesh'],
    isFeatured: true,
    isOnSale: false
  },
  {
    name: 'Silk Scarf',
    description: 'Luxurious silk scarf with elegant print. Perfect accessory for any outfit.',
    price: 49.99,
    category: 'Accessories',
    subcategory: 'Scarves',
    brand: 'Versace',
    images: [{ url: 'https://via.placeholder.com/400', alt: 'Scarf' }],
    colors: [{ name: 'Red', hex: '#FF0000' }, { name: 'Blue', hex: '#0000FF' }],
    stock: 40,
    rating: { average: 4.4, count: 30 },
    features: ['100% Silk', 'Hand Rolled Edges', 'Dry Clean Only'],
    isFeatured: false,
    isOnSale: false
  },
  {
    name: 'Classic Watch',
    description: 'Timeless design watch with leather strap. Swiss movement.',
    price: 299.99,
    originalPrice: 399.99,
    category: 'Accessories',
    subcategory: 'Watches',
    brand: 'Calvin Klein',
    images: [{ url: 'https://via.placeholder.com/400', alt: 'Watch' }],
    colors: [{ name: 'Silver', hex: '#C0C0C0' }, { name: 'Gold', hex: '#FFD700' }],
    stock: 15,
    rating: { average: 4.9, count: 60 },
    features: ['Swiss Movement', 'Leather Strap', 'Water Resistant'],
    isFeatured: true,
    isOnSale: true
  },
  {
    name: 'Summer Dress',
    description: 'Light and breezy summer dress perfect for warm days.',
    price: 59.99,
    category: 'Clothing',
    subcategory: 'Dresses',
    brand: 'Zara',
    images: [{ url: 'https://via.placeholder.com/400', alt: 'Dress' }],
    sizes: [{ size: 'XS', stock: 20 }, { size: 'S', stock: 30 }, { size: 'M', stock: 25 }, { size: 'L', stock: 15 }],
    colors: [{ name: 'Floral', hex: '#FF69B4' }, { name: 'Blue', hex: '#87CEEB' }],
    stock: 90,
    rating: { average: 4.3, count: 75 },
    features: ['Light Fabric', 'Breathable', 'Machine Washable'],
    isFeatured: false,
    isOnSale: false
  },
  {
    name: 'Wireless Headphones',
    description: 'Premium noise-canceling wireless headphones with excellent sound quality.',
    price: 249.99,
    category: 'Electronics',
    subcategory: 'Audio',
    brand: 'Sony',
    images: [{ url: 'https://via.placeholder.com/400', alt: 'Headphones' }],
    colors: [{ name: 'Black', hex: '#000000' }, { name: 'Silver', hex: '#C0C0C0' }],
    stock: 35,
    rating: { average: 4.8, count: 150 },
    features: ['Noise Cancellation', '30hr Battery', 'Bluetooth 5.0'],
    isFeatured: true,
    isOnSale: false
  }
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Clear existing data
    await User.deleteMany({});
    await Product.deleteMany({});
    await Order.deleteMany({});
    console.log('Cleared existing data');

    // Create sample admin user
    const admin = await User.create({
      name: 'Admin User',
      email: 'admin@shopapp.com',
      password: 'admin123',
      role: 'admin'
    });
    console.log('Created admin user');

    // Create sample regular user
    const user = await User.create({
      name: 'John Doe',
      email: 'john@example.com',
      password: 'user123'
    });
    console.log('Created sample user');

    // Insert products
    const createdProducts = await Product.insertMany(products);
    console.log(`Inserted ${createdProducts.length} products`);

    // Create sample order
    const sampleOrder = await Order.create({
      user: user._id,
      orderItems: [
        {
          product: createdProducts[0]._id,
          name: createdProducts[0].name,
          price: createdProducts[0].price,
          quantity: 2,
          image: createdProducts[0].images[0].url
        }
      ],
      shippingAddress: {
        fullName: 'John Doe',
        address: '123 Main St',
        city: 'New York',
        state: 'NY',
        zipCode: '10001',
        country: 'USA',
        phone: '555-555-5555'
      },
      paymentMethod: 'cash_on_delivery',
      itemsPrice: createdProducts[0].price * 2,
      shippingPrice: 0,
      taxPrice: createdProducts[0].price * 2 * 0.08,
      totalPrice: createdProducts[0].price * 2 * 1.08,
      isPaid: true,
      paidAt: Date.now(),
      isDelivered: true,
      deliveredAt: Date.now(),
      status: 'delivered'
    });
    console.log('Created sample order');

    console.log('\n✅ Database seeded successfully!\n');
    console.log('Sample Accounts:');
    console.log('----------------');
    console.log('Admin: admin@shopapp.com / admin123');
    console.log('User:  john@example.com / user123');
    console.log('\nProduct IDs for testing:');
    createdProducts.forEach((p, i) => {
      console.log(`${i + 1}. ${p.name}: ${p._id}`);
    });

    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();

