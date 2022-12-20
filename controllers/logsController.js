const express = require("express");
const logs = express.Router();
const logsArray = require("../models/log.js");

logs.get("/", (req, res) => {
  res.json(logsArray);
});

logs.post("/", (req, res) => {
  logsArray.push(req.body);
  res.json(logsArray.at(-1));
});

logs.get("/:index", (req, res) => {
  const { index } = req.params;
  if (logsArray[index]) {
    res.status(200).json(logsArray[index]);
  } else {
    res.redirect("/error");
  }
});

logs.delete("/:index", (req, res) => {
  const deletedLog = logsArray.splice(req.params.index, 1);
  res.status(200).json(deletedLog);
});

module.exports = logs;
