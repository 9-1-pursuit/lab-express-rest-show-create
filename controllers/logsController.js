const express = require("express");
const logs = express.Router();
let logsArray = require("../models/log");

logs.get("/", (req, res) => {
  res.send(logsArray);
});

logs.post("/", (req, res) => {
  console.log(req.body);
  logsArray = [...logsArray, req.body];
  res.send(logsArray.at(-1));
});

module.exports = logs;
