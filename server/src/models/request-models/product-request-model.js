const Joi = require('joi');

const schema = Joi.object().keys({
  productName: Joi.string().min(3).max(30).required().messages({
    'string.base': 'Product name must be a string',
    'string.min': 'Product name must be at least 3 characters long',
    'string.max':
      'Length of product name must be less than or equal to 30 characters long',
    'any.required': 'Product name is required',
  }),
  skuCode: Joi.string().min(4).max(20).required().messages({
    'string.base': 'SKU code must be a string',
    'string.min': 'SKU code must be at least 4 characters long',
    'string.max':
      'Length of SKU code must be less than or equal to 20 characters long',
    'any.required': 'SKU code is required',
  }),
  productDescription: Joi.string().required().messages({
    'string.base': 'Product description must be a string',
    'any.required': 'Product description is required',
  }),
  category: Joi.string().min(3).max(30).required().messages({
    'string.base': 'Category name must be a string',
    'string.min': 'Category name must be at least 3 characters long',
    'string.max':
      'Length of category name must be less than or equal to 30 characters long',
    'any.required': 'Category name is required',
  }),
  weight: Joi.number().min(0).required().messages({
    'number.base': 'Weight must be a number',
    'any.required': 'Weight is required',
    'number.min': 'Weight must be at least 0',
  }),
  cost: Joi.number().min(0).required().messages({
    'number.base': 'Cost must be a number',
    'any.required': 'Cost is required',
    'number.min': 'Cost must be at least 0',
  }),
  price: Joi.number().min(0).required().messages({
    'number.base': 'Price must be a number',
    'any.required': 'Price is required',
    'number.min': 'Price must be at least 0',
  }),
});

const validate = (data) => {
  const result = schema.validate(data, { abortEarly: false });
  return result;
};

module.exports = validate;
