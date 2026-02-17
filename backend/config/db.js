
import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    // Validate that MONGODB_URI is provided
    if (!process.env.MONGODB_URI) {
      throw new Error('MONGODB_URI environment variable is not defined. Please set it in your .env file or Render dashboard.');
    }

    console.log('Attempting to connect to MongoDB...');
    console.log('Connection string (masked):', process.env.MONGODB_URI.replace(/\/\/.*:.*@/, '//****:****@'));

    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    });
    
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ MongoDB Connection Error: ${error.message}`);
    console.error('Error name:', error.name);
    
    // Provide more helpful guidance based on error type
    if (error.message.includes('querySrv ENOTFOUND')) {
      console.error('💡 The SRV record lookup failed. This might be due to:');
      console.error('   - Network/firewall blocking DNS queries');
      console.error('   - Cluster name mismatch in connection string');
      console.error('   - Try using a standard connection string instead of SRV');
    }
    
    process.exit(1);
  }
};

export default connectDB;

