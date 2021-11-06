const createError = require('http-errors');
const {
  saveProduct,
  getAllProdcuts,
  getProductById,
  update,
  deleteById,
} = require('../services/productService');
const { duplicateKeyErrorHandler } = require('../middlewares');

// Handle retrieving all products
const getAllProdcutsHandler = async (req, res, next) => {
  try {
    const products = await getAllProdcuts();
    res.status(200).send(products);
  } catch (err) {
    next(err);
  }
};

// Handle product addition
const postHandler = async (req, res, next) => {
  const { body } = req;
  const id = await saveProduct(body);
  res.status(201).send(id);
};

// Handle product update
const putHandler = async (req, res, next) => {
  const { id } = req.params;
  const { body } = req;
  const result = await update(body, id);
  if (result instanceof Error) {
    next(result);
  } else {
    res.status(204).json();
  }
};

// Handle product deletion
const deleteHandler = async (req, res, next) => {
  const { id } = req.params;
  const result = await deleteById(id);
  if (result instanceof Error) {
    next(result);
  } else {
    res.status(204).json();
  }
};

// Handle retrieving a product by id
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
  postHandler,
  putHandler,
  getAllProdcutsHandler,
  deleteHandler,
};
