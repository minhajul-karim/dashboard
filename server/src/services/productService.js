const createError = require('http-errors');
const models = require('../models/data-models');
const { NotFound } = require('../utils/error');

// Get all products
const getAllProdcuts = async () => {
  const products = await models.Product.find();
  return products;
};

// Get a product by id
const getProductById = async (prodId) => {
  try {
    const product = await models.Product.findById(prodId);
    if (product) {
      return product;
    }
    throw new NotFound(`No product found with id: ${prodId}`);
  } catch (err) {
    return err;
  }
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
const update = async (updatedProduct, prodId) => {
  try {
    const product = await models.Product.findById(prodId);
    if (product) {
      product.skuCode = updatedProduct.skuCode;
      product.productName = updatedProduct.productName;
      product.productDescription = updatedProduct.productDescription;
      product.weight = updatedProduct.weight;
      product.cost = updatedProduct.cost;
      product.price = updatedProduct.price;
      product.category = updatedProduct.category;
      product.save();
      return product._id;
    }
    throw new NotFound(`No product found with id: ${prodId}`);
  } catch (err) {
    return err;
  }
};

// Delete a product if found, else throw error
const deleteById = async (prodId) => {
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
  getProductById,
  update,
  deleteById,
};
