const express = require('express');
const router = express.Router();
const Newsletter = require('../models/Newsletter');

// @route   POST /api/newsletter/subscribe
// @desc    Subscribe to newsletter
// @access  Public
router.post('/subscribe', async (req, res) => {
  try {
    const { email } = req.body;

    // Validate email
    if (!email) {
      return res.status(400).json({
        success: false,
        message: 'Email is required'
      });
    }

    // Check if email already exists
    const existingSubscriber = await Newsletter.findOne({ email });

    if (existingSubscriber) {
      if (existingSubscriber.isActive) {
        return res.status(400).json({
          success: false,
          message: 'This email is already subscribed to our newsletter'
        });
      } else {
        // Reactivate subscription
        existingSubscriber.isActive = true;
        existingSubscriber.subscribedAt = Date.now();
        await existingSubscriber.save();

        return res.json({
          success: true,
          message: 'Welcome back! Your subscription has been reactivated.'
        });
      }
    }

    // Create new subscriber
    const subscriber = new Newsletter({ email });
    await subscriber.save();

    res.status(201).json({
      success: true,
      message: 'Thank you for subscribing to our newsletter!'
    });
  } catch (error) {
    console.error('Newsletter subscription error:', error);

    if (error.name === 'ValidationError') {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address'
      });
    }

    res.status(500).json({
      success: false,
      message: 'Failed to subscribe. Please try again later.'
    });
  }
});

// @route   GET /api/newsletter/subscribers
// @desc    Get all newsletter subscribers (for admin)
// @access  Public (should be protected in production)
router.get('/subscribers', async (req, res) => {
  try {
    const subscribers = await Newsletter.find({ isActive: true })
      .sort({ subscribedAt: -1 });

    res.json({
      success: true,
      count: subscribers.length,
      data: subscribers
    });
  } catch (error) {
    console.error('Error fetching subscribers:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch subscribers'
    });
  }
});

module.exports = router;
