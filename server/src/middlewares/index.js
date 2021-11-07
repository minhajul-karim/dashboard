const createError = require('http-errors');
const { validateReq } = require('../models/request-models');
const {
  BadRequest,
  UnprocessableEntity,
  GeneralError,
} = require('../utils/error');

// Validate request to add product
const handleReqValidation = (req, res, next) => {
  const result = validateReq(req.body);
  if (result.error) {
    const { details } = result.error;
    const messages = details.map((item) => item.message).join(', ');
    throw new BadRequest(messages);
  }
  next();
};

// Default error handler
const handleErrors = (err, req, res, next) => {
  if (err instanceof GeneralError) {
    const errCode = err.getCode();
    return res.status(errCode).json({ name: err.name, message: err.message });
  }
  return res
    .status(500)
    .json({ name: 'Interval Server Error', message: err.message });
};

// TODO: CAN WE DEPRECATE THIS?
// Not found handler
const notFoundHandler = (req, res, next) => {
  res.json({});
};

// TODO: CAN WE DEPRECATE THIS?
const duplicateKeyErrorHandler = (err, req, res, next) => {
  if (err.name === 'MongoServerError' && err.code === 11000) {
    const errorField = Object.keys(err.keyValue)[0];
    const message =
      errorField === 'productName'
        ? 'Product name already exists'
        : 'SKU code already exists';
    throw new UnprocessableEntity(message);
  } else {
    next(err);
  }
};

module.exports = {
  handleErrors,
  notFoundHandler,
  handleReqValidation,
  duplicateKeyErrorHandler,
};
