const { validateAddProductReq } = require('../models/request-models');

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
  const error = { message: err.message };
  res.status(err.status || 500);
  res.json({ error });
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
