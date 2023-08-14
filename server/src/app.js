const express = require("express");
const cors = require("cors");
const app = express();

const planetsRouter = require("./routes/planets/planets.router");


app.use(express.json());

// Configure CORS to allow requests from http://localhost:3000
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(planetsRouter);

module.exports = app;
