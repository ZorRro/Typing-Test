const winston = require("winston");
const config = require("config");
const LOG_LEVEL = config.get("app.LOG_LEVEL") || "error";

const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.splat(),
    winston.format.timestamp(),
    winston.format.colorize(),
    winston.format.printf(
      info => `${info.timestamp}   :: [${info.level}]  :  ${info.message}`
    )
  ),
  transports: [
    new winston.transports.Console({
      level: config.get("app.LOG_LEVEL"),
      colorize: true
    })
  ]
});

logger.addTransport = (filename, level) => {
  logger.add(
    new winston.transports.File({
      filename: `${filename}.log`,
      level: level
    })
  );
};

logger.stream = {
  write: function(message, encoding) {
    logger.info(message);
  }
};

module.exports = logger;
