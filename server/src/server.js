const http = require("http");

const app = require("./app");

const mongoose = require("mongoose");
require("dotenv").config();

const { loadPlanetsData } = require("./models/planets.model");

const PORT = process.env.PORT || 8000;
const MONGO_URL = process.env.MONGO_URL || "default-mongo-url-here";

const server = http.createServer(app);

mongoose.connection.once("open", () => {
  console.log("Connected to mongodb");
});

mongoose.connection.on("error", (err) => {
  console.error(err);
});
async function startServer() {
  await mongoose.connect(MONGO_URL);
  await loadPlanetsData();
}

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});

startServer();
