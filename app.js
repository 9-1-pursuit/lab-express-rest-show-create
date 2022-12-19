const express = require("express");
const morgan = require("morgan");

const app = express();

require("dotenv").config();
morgan("tiny");

app.get("/", (req, res) => {
  res.send("App running yeah okay...");
});

module.exports = app;
