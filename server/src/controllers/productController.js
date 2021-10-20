const {
  addProduct,
  getAllProdcuts,
  getAProduct,
} = require('../services/productService');

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
    next(err);
  }
};

// Get a product
const getProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await getAProduct(id);
    res.status(200).send(product);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getProduct,
  addProductHandler,
  getAllProdcutsHandler,
};
