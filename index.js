const http = require("http");
const app = require("./app/app");
const dbConnection = require("./database/connection");
const Logger = require("./util/logger");

async function init(app) {
  const PORT = app.get("PORT");
  const server = http.createServer(app);

  server.listen(PORT, () => {
    Logger.info(`Server is listening on port : ${PORT}`);
  });
}

init(app);
