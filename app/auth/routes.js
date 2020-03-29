const Router = require("express").Router();
const HTTP_STATUS = require("http-status-codes");

Router.get("/add-logger", (req, res, next) => {
  const fileName = req.query.filename || "app-silly.log";
  const logLevel = req.query.level || "silly";
  const Logger = require("../../util/logger");

  Logger.addTransport(fileName, logLevel);

  Logger.debug("Added a new transport");
  Logger.debug(
    `New transport detail [ filename = ${fileName}, level : ${logLevel}`
  );
  return res.sendStatus(HTTP_STATUS.ACCEPTED);
});

Router.get("/remove-logger", (req, res, next) => {
  const fileName = req.query.filename || "app-silly.log";
  const logLevel = req.query.level || "silly";
  const Logger = require("../../util/logger");

  const transport = Logger.transports.find(transport => {
    return (
      transport.level === logLevel && transport.filename === `${fileName}.log`
    );
  });
  Logger.remove(transport);
  Logger.info(
    `Removed a transport [ fileName: ${fileName}, level: ${logLevel} ]`
  );
  return res.sendStatus(HTTP_STATUS.OK);
});

module.exports = Router;
