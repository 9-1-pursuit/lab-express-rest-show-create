const express = require("express");
const morgan = require("morgan");

const app = express();
require("dotenv").config();

app.use(morgan("tiny"));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("welcome to the");
});

module.exports = app;
