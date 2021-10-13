const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  productName: {
    type: String,
    minLength: 3,
    maxLength: 30,
    trim: true,
    required: true,
  },
  skuCode: {
    type: String,
    minLength: 4,
    maxLength: 20,
    trim: true,
    required: true,
  },
  productDescription: {
    type: String,
    trim: true,
    required: true,
  },
  category: {
    type: String,
    minLength: 3,
    maxLength: 30,
    trim: true,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  cost: {
    type: Number,
    min: 0,
    required: true,
  },
  price: {
    type: Number,
    min: 0,
    required: true,
  },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
