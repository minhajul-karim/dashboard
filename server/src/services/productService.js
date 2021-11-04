const createError = require('http-errors');
const models = require('../models/data-models');
const { NotFound } = require('../utils/error');

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
  // Rebuild all unique indexes
  await models.Product.syncIndexes();
  const newProduct = new models.Product(product);
  const savedProduct = await newProduct.save();
  return savedProduct._id;
};

// Update a product
const updateProduct = async (product, prodId) => {
  const updatedProduct = models.Product.findByIdAndUpdate(prodId, product, {
    returnDocument: 'after',
  }).exec();
  return updatedProduct;
};

// Delete a product if found, else throw error
const deleteProduct = async (prodId) => {
  try {
    const product = await models.Product.findById(prodId);
    if (product) {
      const result = await models.Product.deleteOne({ _id: prodId }).exec();
      return result;
    }
    throw new NotFound(`No product found with id: ${prodId}`);
  } catch (err) {
    return err;
  }
};

module.exports = {
  addProduct,
  getAllProdcuts,
  getAProduct,
  updateProduct,
  deleteProduct,
};
