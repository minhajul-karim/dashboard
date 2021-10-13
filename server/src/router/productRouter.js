const express = require('express');
const { addProductHandler } = require('../controllers/productController');

const router = express.Router();

// All products
router.get('/', (req, res) => {
  res.json({ message: 'You will all products here soon insha Allah' });
});

// Add product
router.post('/', addProductHandler);

module.exports = router;
