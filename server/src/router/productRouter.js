const express = require('express');
const {
  getByIdHandler,
  postHandler,
  putHandler,
  getAllProdcutsHandler,
  deleteHandler,
} = require('../controllers/productController');
const { handleReqValidation } = require('../middlewares/index');

const router = express.Router();

router
  .route('/')
  .get(getAllProdcutsHandler)
  .post(handleReqValidation, postHandler);

router
  .route('/:id')
  .get(getByIdHandler)
  .put(handleReqValidation, putHandler)
  .delete(deleteHandler);

module.exports = router;
