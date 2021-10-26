const express = require('express');
const {
  getProductHandler,
  addProductHandler,
  updateProductHandler,
  getAllProdcutsHandler,
} = require('../controllers/productController');
const { handleReqValidation } = require('../middlewares/index');

const router = express.Router();

router
  .route('/')
  .get(getAllProdcutsHandler)
  .post(handleReqValidation, addProductHandler);

router
  .route('/:id')
  .get(getProductHandler)
  .put(handleReqValidation, updateProductHandler);

module.exports = router;
