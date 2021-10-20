const models = require('../models/data-models');

// Get all products
const getAllProdcuts = async () => {
  const products = await models.Product.find();
  return products;
};

// Get a product
const getAProduct = async (id) => {
  const product = await models.Product.findById(id);
  return product;
};

// Add a new product
const addProduct = async (product) => {
  const newProduct = new models.Product(product);
  const savedProduct = await newProduct.save();
  return savedProduct._id;
};

module.exports = {
  addProduct,
  getAllProdcuts,
  getAProduct,
};
