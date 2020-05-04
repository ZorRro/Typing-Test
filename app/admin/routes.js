const Router = require("express").Router();
const Logger = require("../../util/logger");
const HTTP_STATUS = require("http-status-codes");
const { TestModel } = require("../../database/connection");

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

Router.post("/add-test", async (req, res, next) => {
  const { author, title, description, difficulty_level, content } = req.body;
  let test = new TestModel({
    author: author,
    title: title,
    description: description,
    difficulty_level: difficulty_level,
    content: content
  });

  try {
    let result = await test.save();
    Logger.debug(`Saved : ${result._id}`);
    return res.status(201).send();
  } catch (error) {
    Logger.error("Error occurred saving document in 'tests' collection");
    next(error);
  }
});

module.exports = Router;
