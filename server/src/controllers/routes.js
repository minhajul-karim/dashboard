const express = require('express');
const productRoutes = require('../router/productRouter');

const router = express.Router();

router.use('/products', productRoutes);

module.exports = router;
