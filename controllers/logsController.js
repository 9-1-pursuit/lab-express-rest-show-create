const express = require("express");
const logs = express.Router();
let logsArray = require("../models/log.js");

logs.get("/", (req, res) => {
  res.json(logsArray);
});

logs.post("/", (req, res) => {
  logsArray.push(req.body);
  res.json(logsArray.at(-1));
});

logs.get("/:index", (req, res) => {
  const { index } = req.params;
  if (logsArray[index]) res.send(logsArray[index]);
  else {
    res.redirect("/*");
  }
});

module.exports = logs;
