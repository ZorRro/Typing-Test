const express = require("express");
const cors = require("cors");
const { OK, NOT_FOUND, INTERNAL_SERVER_ERROR } = require("http-status-codes");
const config = require("config");
const morgan = require("morgan");
const Logger = require("../util/logger.js");
const TestRoutes = require("./type-test/routes");
const AuthRoutes = require("./auth/routes");

const app = express();
const PORT = config.get("app.PORT");

// APP configuration
app.set("PORT", PORT);

// APP level Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("combined", { stream: Logger.stream }));

// Routes
app.use("/api", TestRoutes);
app.use("/auth", AuthRoutes);
app.get("/", (req, res, next) => {
  res.sendStatus(OK);
});
app.use("*", (req, res, next) => {
  res.sendStatus(NOT_FOUND);
});
app.use((err, req, res, next) => {
  Logger.info("Responding from error handler");
  return res.status(INTERNAL_SERVER_ERROR).send();
});

module.exports = app;
