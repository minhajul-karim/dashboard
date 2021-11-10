const winston = require('winston');
const expressWinston = require('express-winston');
const winstonFile = require('winston-daily-rotate-file');
const winstonMongo = require('winston-mongodb');
const { ElasticsearchTransport } = require('winston-elasticsearch');

const { uri } = require('./mongo');

// Create log message
const getLogMessage = (req, res) => {
  const logObj = {
    correlationId: req.headers['x-correlation-id'],
    requestBody: req.body,
  };
  return JSON.stringify(logObj);
};

// Info log file config
const fileInfoTransport = new winston.transports.DailyRotateFile({
  filename: 'logs/log-info-%DATE%.log',
  datePattern: 'yyyy-MM-DD-HH',
  level: 'info',
});

// Elastic search log config
const esOptions = {
  level: 'info',
  clientOpts: { node: 'http://localhost:9200' },
  indexPrefix: 'log-goods',
};

const esTransport = new ElasticsearchTransport(esOptions);

// Info logging to console & file config
const infoLogger = () =>
  expressWinston.logger({
    transports: [
      new winston.transports.Console(),
      fileInfoTransport,
      esTransport,
    ],
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.json(),
      winston.format.prettyPrint()
    ),
    meta: true,
    msg: getLogMessage,
  });

// Error log file config
const fileErrorTransport = new winston.transports.DailyRotateFile({
  filename: 'logs/log-error-%DATE%.log',
  datePattern: 'yyyy-MM-DD-HH',
  level: 'error',
});

// MongoDB error log config
const mongoErrorTransport = new winston.transports.MongoDB({
  db: uri,
  metaKey: 'meta',
});

// Error logging to console & file config
const errorLogger = () =>
  expressWinston.errorLogger({
    transports: [
      new winston.transports.Console(),
      fileErrorTransport,
      mongoErrorTransport,
      esTransport,
    ],
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.json()
    ),
    meta: true,
    msg: '{"correlationId": {{req.headers["x-correlation-id"]}}, "error": "{{err.message}}"}',
  });

module.exports = { infoLogger, errorLogger };
