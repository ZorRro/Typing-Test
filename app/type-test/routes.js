const Controller = require("./controller");
const Router = require("express").Router();

Router.get("/all-test", Controller.allTest);
Router.get("/test/:id", Controller.retrieveTest);

module.exports = Router;
