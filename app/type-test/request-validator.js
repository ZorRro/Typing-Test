const { param } = require("express-validator");

const testRequestValidator = (req, res, next) => {
  return [param("testId").exists().trim().length(24)];
};
