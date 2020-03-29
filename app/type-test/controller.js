const { TestModel } = require("../../database/connection");
const HTTP_STATUS = require("http-status-codes");
const Logger = require("../../util/logger");

module.exports.allTest = async (req, res, next) => {
  try {
    const testList = await TestModel.find({});
    Logger.debug("DB operation successful.");
    return res.status(HTTP_STATUS.OK).send(testList);
  } catch (exception) {
    Logger.error("Error occurred retrieving all tests from DB.");
    Logger.error(exception);
    return next(exception);
  }
};

module.exports.retrieveTest = async (req, res, next) => {
  const testId = req.params.id;
  try {
    const test = await TestModel.findOne({ _id: testId });
    Logger.debug("DB operation successful.");
    return res.status(HTTP_STATUS.OK).send(test);
  } catch (exception) {
    Logger.error(`Error occurred retrieving test from DB with ID : ${testId}`);
    Logger.error(exception);
    return next(exception);
  }
};
