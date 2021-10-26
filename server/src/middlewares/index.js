const createError = require('http-errors');
const { validateReq } = require('../models/request-models');

// Validate request to add product
const handleReqValidation = (req, res, next) => {
  const result = validateReq(req.body);
  if (result.error) {
    const { details } = result.error;
    const messages = details.map((item) => item.message).join(', ');
    throw new Error(messages);
  }
  next();
};

// Default error handler
const errorHandler = (err, req, res, next) => {
  res.status(err.status || 500).json({ message: err.message });
};

// Not found handler
const notFoundHandler = (req, res, next) => {
  res.json({});
};

const duplicateKeyErrorHandler = (err, req, res, next) => {
  if (err.name === 'MongoServerError' && err.code === 11000) {
    const errorField = Object.keys(err.keyValue)[0];
    const errorMsg =
      errorField === 'productName'
        ? 'Product name already exists'
        : 'SKU code already exists';
    next(createError(422, errorMsg));
  } else {
    next(err);
  }
};

module.exports = {
  errorHandler,
  notFoundHandler,
  handleReqValidation,
  duplicateKeyErrorHandler,
};
