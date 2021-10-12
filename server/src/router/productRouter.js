const express = require('express');

const router = express.Router();

// All products
router.get('/', (req, res) => {
  res.json({ message: 'You will all products here soon insha Allah' });
});

module.exports = router;
