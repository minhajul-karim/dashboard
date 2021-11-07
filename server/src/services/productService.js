const createError = require('http-errors');
const models = require('../models/data-models');
const { getMessage } = require('../utils/common');
const {
  BadRequest,
  NotFound,
  UnprocessableEntity,
  GeneralError,
} = require('../utils/error');

// Get all products
const getAllProdcuts = async () => {
  try {
    const products = await models.Product.find();
    return products;
  } catch (err) {
    throw new GeneralError('Something went wrong.');
  }
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
    if (err instanceof NotFound) {
      throw err;
    }
    throw new BadRequest(err.message);
  }
};

// Add a new product
const saveProduct = async (product) => {
  // Rebuild all unique indexes
  await models.Product.syncIndexes();
  try {
    const newProduct = new models.Product({
      ...product,
      createdAt: new Date(),
    });
    const savedProduct = await newProduct.save();
    return savedProduct._id;
  } catch (err) {
    // Handle duplicate product name, sku code error
    const message = getMessage(err);
    throw new UnprocessableEntity(message);
  }
};

// Find a product and update that
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
      try {
        await product.save();
        return product._id;
      } catch (err) {
        // Handle duplicate product name, sku code error
        const message = getMessage(err);
        throw new UnprocessableEntity(message);
      }
    }
    throw new NotFound(`No product found with id: ${prodId}`);
  } catch (err) {
    if (err instanceof NotFound || err instanceof UnprocessableEntity) {
      throw err;
    }
    throw new BadRequest(err.message);
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
    if (err instanceof NotFound) {
      throw err;
    }
    throw new BadRequest(err.message);
  }
};

module.exports = {
  saveProduct,
  getAllProdcuts,
  getProductById,
  update,
  deleteById,
};
