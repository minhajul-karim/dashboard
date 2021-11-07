const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');

// Internal imports
const productRouter = require('./router/productRouter');
const connectWithDB = require('./mongo');
const configureRoute = require('./controllers');
const { notFoundHandler, handleErrors } = require('./middlewares');

// Create an express application
const app = express();

// Load env file
dotenv.config();

// Database connection
connectWithDB();

// CORS
app.use(cors());

// Parse incoming requests with JSON payloads
app.use(express.json());

// Parse incoming requests with form data
app.use(express.urlencoded({ extended: true }));

// Logger
app.use(morgan('dev'));

// Configure routes
configureRoute(app);

// Not found handler
app.use(notFoundHandler);

// Common error handler
app.use(handleErrors);

module.exports = app;
