const express = require("express");
const logs = express.Router();
const logsArray = require("../models/log");

logs.get("/", (req, res) => {
  res.send(logsArray);
});

module.exports = logs;
