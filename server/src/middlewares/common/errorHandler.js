// Default error handler
const errorHandler = (err, req, res, next) => {
  const error =
    process.env.NODE_ENV === 'development' ? err : { message: err.message };
  res.json(error);
};

// Not found handler
const notFoundHandler = (req, res, next) => {
  res.json({});
};

module.exports = { errorHandler, notFoundHandler };
