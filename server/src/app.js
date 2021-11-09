const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');
const winston = require('winston');
const expressWinston = require('express-winston');
const winstonFile = require('winston-daily-rotate-file');
const winstonMongo = require('winston-mongodb');
const { ElasticsearchTransport } = require('winston-elasticsearch');

// Internal imports
const { transports } = require('winston');
const productRouter = require('./router/productRouter');
const connectWithDB = require('./mongo');
const configureRoute = require('./controllers');
const {
  notFoundHandler,
  handleErrors,
  processRequest,
} = require('./middlewares');

// Create an express application
const app = express();

// Load env file
dotenv.config();

// Database connection
connectWithDB();

// Log message
const getLogMessage = (req, res) => {
  const logObj = {
    correlationId: req.headers['x-correlation-id'],
    requestBody: req.body,
  };
  return JSON.stringify(logObj);
};

// Console logging config
const infoLogger = expressWinston.logger({
  transports: [new winston.transports.Console()],
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.json()
  ),
  meta: true,
  msg: getLogMessage,
});

// Log to console
app.use(infoLogger);

// CORS
app.use(cors());

// Parse incoming requests with JSON payloads
app.use(express.json());

// Process correlation id of request
app.use(processRequest);

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
