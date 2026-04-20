const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB Connection
const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/animal-adoption';
    console.log('🔗 Connecting to:', mongoURI);
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of 30s
      socketTimeoutMS: 45000,
    });
    console.log('✅ MongoDB Connected Successfully');
    console.log('📊 Database name:', mongoose.connection.db.databaseName);
  } catch (error) {
    console.error('❌ MongoDB Connection Error:', error.message);
    console.log('\n⚠️  Server will continue running without database connection.');
    console.log('📝 Please check:');
    console.log('   1. Your IP is whitelisted in MongoDB Atlas Network Access');
    console.log('   2. Your MongoDB credentials are correct in .env file');
    console.log('   3. Your internet connection is stable\n');
    // Don't exit - let server run without DB for now
  }
};

connectDB();

// Import Routes
const contactRoutes = require('./routes/contactRoutes');
const newsletterRoutes = require('./routes/newsletterRoutes');

// Use Routes
app.use('/api/contact', contactRoutes);
app.use('/api/newsletter', newsletterRoutes);

// Health Check Route
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Server is running',
    database: mongoose.connection.readyState === 1 ? 'Connected' : 'Disconnected'
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    success: false, 
    message: 'Something went wrong!', 
    error: process.env.NODE_ENV === 'development' ? err.message : undefined 
  });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
