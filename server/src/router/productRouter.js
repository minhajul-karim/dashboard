const express = require('express');

const router = express.Router();

// All products
router.get('/', (req, res) => {
  res.json({ message: 'You will all products here soon insha Allah' });
});

// Add product
router.post('/', (req, res) => {
  console.log(req.body);
  res.json(req.body);
});

module.exports = router;
