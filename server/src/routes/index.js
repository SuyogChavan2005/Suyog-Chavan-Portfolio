const express = require('express');
const contactRoutes = require('./contact.routes');
const visitorRoutes = require('./visitor.routes');
const { globalRateLimiter } = require('../middleware/rateLimiter.middleware');

const router = express.Router();

router.use(globalRateLimiter);

// 👇 Add this
router.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Portfolio API is running',
    version: 'v1',
  });
});

router.get('/health', (req, res) =>
  res.json({
    success: true,
    status: 'ok',
    timestamp: new Date().toISOString(),
  }),
);

router.use('/contact', contactRoutes);

router.use('/visitors', visitorRoutes);

module.exports = router;
