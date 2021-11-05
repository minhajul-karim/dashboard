const express = require('express');
const {
  getByIdHandler,
  addProductHandler,
  putHandler,
  getAllProdcutsHandler,
  deleteHandler,
} = require('../controllers/productController');
const { handleReqValidation } = require('../middlewares/index');

const router = express.Router();

router
  .route('/')
  .get(getAllProdcutsHandler)
  .post(handleReqValidation, addProductHandler);

router
  .route('/:id')
  .get(getByIdHandler)
  .put(handleReqValidation, putHandler)
  .delete(deleteHandler);

module.exports = router;
