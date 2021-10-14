const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const productRouter = require('./router/productRouter');
const { errorHandler, notFoundHandler } = require('./middlewares');
const connectWithDB = require('./mongo');
const configureRoute = require('./controllers');

const app = express();
dotenv.config();

// Database connection
connectWithDB();

// CORS
app.use(cors());

// Request parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Logger
app.use(morgan('dev'));

// Configure routes
configureRoute(app);

// Not found handler
app.use(notFoundHandler);

// Common error handler
app.use(errorHandler);

module.exports = app;
