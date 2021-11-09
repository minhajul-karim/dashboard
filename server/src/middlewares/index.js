const createError = require('http-errors');
const { validateReq } = require('../models/request-models');
const {
  BadRequest,
  UnprocessableEntity,
  GeneralError,
} = require('../utils/error');

// Get or set correlation id
const processRequest = async (req, res, next) => {
  let correlationId = req.headers['x-correlation-id'];
  if (!correlationId) {
    correlationId = Date.now().toString();
    req.headers['x-correlation-id'] = correlationId;
  }
  res.set('x-correlation-id', correlationId);
  return next();
};

// Validate request to add product
const handleReqValidation = (req, res, next) => {
  const result = validateReq(req.body);
  if (result.error) {
    // Throw bad request exception with details
    const { details } = result.error;
    const messages = details.map((item) => item.message).join(', ');
    throw new BadRequest(messages);
  }
  return next();
};

// Default error handler
const handleErrors = (err, req, res, next) => {
  let errCode;
  if (err instanceof GeneralError) {
    errCode = err.getCode();
  }
  const correlationId = req.headers['x-correlation-id'];
  const { message } = err;
  return res.status(errCode).json({ correlationId, message });
};

// Not found handler
const notFoundHandler = (req, res, next) => {
  res.status(404).json({});
};

module.exports = {
  handleErrors,
  notFoundHandler,
  handleReqValidation,
  processRequest,
};
