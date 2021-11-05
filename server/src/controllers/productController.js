const createError = require('http-errors');
const {
  addProduct,
  getAllProdcuts,
  getProductById,
  update,
  deleteById,
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

const putHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { body } = req;
    await update(body, id);
    res.status(204).json();
  } catch (err) {
    duplicateKeyErrorHandler(err, req, res, next);
  }
};

const deleteHandler = async (req, res, next) => {
  const { id } = req.params;
  const result = await deleteById(id);
  if (result instanceof Error) {
    next(result);
  } else {
    res.status(204).json();
  }
};

// Get a product
const getByIdHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await getProductById(id);
    if (product instanceof Error) {
      next(product);
    } else {
      res.status(200).send(product);
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getByIdHandler,
  addProductHandler,
  putHandler,
  getAllProdcutsHandler,
  deleteHandler,
};
