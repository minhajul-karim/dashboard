const winston = require('winston');
const expressWinston = require('express-winston');
const winstonFile = require('winston-daily-rotate-file');
const winstonMongo = require('winston-mongodb');
const { ElasticsearchTransport } = require('winston-elasticsearch');

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
  filename: 'log-info-%DATE%.log',
  datePattern: 'yyyy-MM-DD-HH',
});

// Error log file config
const fileErrorTransport = new winston.transports.DailyRotateFile({
  filename: 'log-error-%DATE%.log',
  datePattern: 'yyyy-MM-DD-HH',
});

// Info logging to console & file config
const infoLogger = () =>
  expressWinston.logger({
    transports: [new winston.transports.Console(), fileInfoTransport],
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.json()
    ),
    meta: true,
    msg: getLogMessage,
  });

// Error logging to console & file config
const errorLogger = () =>
  expressWinston.logger({
    transports: [new winston.transports.Console(), fileErrorTransport],
  });

module.exports = { infoLogger };
