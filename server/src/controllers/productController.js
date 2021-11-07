const {
  saveProduct,
  getAllProdcuts,
  getProductById,
  update,
  deleteById,
} = require('../services/productService');

// Handle retrieving all products
const getHandler = async (req, res, next) => {
  try {
    const products = await getAllProdcuts();
    return res.status(200).send(products);
  } catch (err) {
    return next(err);
  }
};

// Handle product addition
const postHandler = async (req, res, next) => {
  try {
    const { body } = req;
    const id = await saveProduct(body);
    return res.status(201).send(id);
  } catch (err) {
    return next(err);
  }
};

// Handle product update
const putHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { body } = req;
    await update(body, id);
    return res.status(204).json();
  } catch (err) {
    return next(err);
  }
};

// Handle product deletion
const deleteHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    await deleteById(id);
    return res.status(204).json();
  } catch (err) {
    return next(err);
  }
};

// Handle retrieving a product by id
const getByIdHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await getProductById(id);
    return res.status(200).send(product);
  } catch (err) {
    return next(err);
  }
};

module.exports = {
  getHandler,
  postHandler,
  putHandler,
  deleteHandler,
  getByIdHandler,
};
