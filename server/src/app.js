const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const productRouter = require('./router/productRouter');
const {
  errorHandler,
  notFoundHandler,
} = require('./middlewares/common/errorHandler');

const app = express();
dotenv.config();

// Database connection

// Request parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routing
app.use('/products', productRouter);

// Not found handler
app.use(notFoundHandler);

// Common error handler
app.use(errorHandler);

module.exports = app;
