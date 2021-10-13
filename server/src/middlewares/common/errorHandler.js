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

module.exports = { errorHandler, notFoundHandler };
