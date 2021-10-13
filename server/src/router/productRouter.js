const express = require('express');
const {
  addProductHandler,
  getAllProdcutsHandler,
} = require('../controllers/productController');
const { handleAddProductReqValidation } = require('../middlewares/index');

const router = express.Router();

// All products
router.get('/', getAllProdcutsHandler);

// Add product
router.post('/', handleAddProductReqValidation, addProductHandler);

module.exports = router;
