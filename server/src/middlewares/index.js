const { validateAddProductReq } = require('../models/request-models');

// Validate request to add product
const handleAddProductReqValidation = (req, res, next) => {
  const result = validateAddProductReq(req.body);
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

module.exports = {
  errorHandler,
  notFoundHandler,
  handleAddProductReqValidation,
};
