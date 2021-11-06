const express = require('express');
const {
  getByIdHandler,
  postHandler,
  putHandler,
  getHandler,
  deleteHandler,
} = require('../controllers/productController');
const { handleReqValidation } = require('../middlewares/index');

const router = express.Router();

router.route('/').get(getHandler).post(handleReqValidation, postHandler);

router
  .route('/:id')
  .get(getByIdHandler)
  .put(handleReqValidation, putHandler)
  .delete(deleteHandler);

module.exports = router;
