const express = require('express');
const {
  getProduct,
  addProductHandler,
  getAllProdcutsHandler,
} = require('../controllers/productController');
const { handleAddProductReqValidation } = require('../middlewares/index');

const router = express.Router();

// All products
router.get('/', getAllProdcutsHandler);

// Add product
router.post('/', handleAddProductReqValidation, addProductHandler);

// Get a product
router.get('/:id', getProduct);

module.exports = router;
