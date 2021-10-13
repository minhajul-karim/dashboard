const models = require('../models/data-models');

const addProduct = async (product) => {
  const newProduct = new models.Product(product);
  const savedProduct = await newProduct.save();
  return savedProduct._id;
};

module.exports = {
  addProduct,
};
