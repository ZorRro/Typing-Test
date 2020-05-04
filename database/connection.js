const config = require("config");
const mongoose = require("mongoose");
const TestSchema = require("./model/tests.model");
const Logger = require("../util/logger");

const connection = mongoose.connection;
const handledEvents = [
  "connecting",
  "connected",
  "disconnecting",
  "disconnected",
  "reconnected",
  "error"
];
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
  autoIndex: true, // Don't build indexes
  poolSize: 4, // Maintain up to 10 socket connections
  serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
  socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
  family: 4 // Use IPv4, skip trying IPv6
};

handledEvents.forEach(event => {
  connection.on(event, arg => {
    Logger.info(`Mongo DB => ${event}`);
    if (event === "error") {
      Logger.error(arg);
    }
  });
});

let connectToDB = async MONGO_URI => {
  try {
    await mongoose.connect(MONGO_URI, options);
  } catch (exception) {
    Logger.error("Exception caught while connecting to DB.");
    Logger.debug(`DB Connection URI : ${MONGO_URI}`);
    Logger.error(exception);
  }
};

connectToDB(config.get("db.DB_URI"));

const TestModel = mongoose.model("test", TestSchema);

module.exports = {
  TestModel: TestModel
};
