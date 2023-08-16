const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");

const planetsRouter = require("./routes/planets/planets.router");

app.use(express.json());

// Configure CORS to allow requests from http://localhost:3000
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(express.static(path.join(__dirname, "..", "public")));

app.use(planetsRouter);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

module.exports = app;
