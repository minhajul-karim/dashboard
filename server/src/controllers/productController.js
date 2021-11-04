const createError = require('http-errors');
const {
  addProduct,
  getAllProdcuts,
  getAProduct,
  updateProduct,
  deleteProduct,
} = require('../services/productService');
const { duplicateKeyErrorHandler } = require('../middlewares');

// Get all products
const getAllProdcutsHandler = async (req, res, next) => {
  try {
    const products = await getAllProdcuts();
    res.status(200).send(products);
  } catch (err) {
    next(err);
  }
};

// Add new product
const addProductHandler = async (req, res, next) => {
  try {
    const { body } = req;
    const id = await addProduct(body);
    res.status(201).send(id);
  } catch (err) {
    duplicateKeyErrorHandler(err, req, res, next);
  }
};

const updateProductHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { body } = req;
    await updateProduct(body, id);
    res.status(204).json();
  } catch (err) {
    duplicateKeyErrorHandler(err, req, res, next);
  }
};

const deleteProductHandler = async (req, res, next) => {
  const { id } = req.params;
  const result = await deleteProduct(id);
  if (result instanceof Error) {
    next(result);
  } else {
    res.status(204).json();
  }
};

// Get a product
const getProductHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await getAProduct(id);
    res.status(200).send(product);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getProductHandler,
  addProductHandler,
  updateProductHandler,
  getAllProdcutsHandler,
  deleteProductHandler,
};
