const express = require("express");
const logs = express.Router();
const logsArr = require("../models/log");

logs.get("/", (req, res) => {
  res.status(200).json(logsArr);
});

module.exports = logs;
