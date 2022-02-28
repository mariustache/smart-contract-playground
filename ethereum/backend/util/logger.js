const winston = require('winston')

const format = winston.format.printf(( {level, message, timestamp}) => {
  return `${timestamp} [${level}]: ${message}`;
})
const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.timestamp(),
    format
  ),
  transports: [new winston.transports.Console()]
})

module.exports = logger;