const express = require("express");
const log = express.Router();
const logArray = require("../models/log.js");

log.get("/", (req, res) => {
  res.json(logArray);
});

log.get("/:index", (req, res) => {
  const { index } = req.params;
  if (logArray[index]) {
    res.status(200).json(logArray[index]);
  } else {
    res.redirect("/*");
  }
});

log.post("/", (req, res) => {
  logArray.push(req.body);
  res.json(logArray.at(-1));
});

log.delete("/:id", (req, res) => {
  logArray.pop(req.body);
  res.json(logArray.at({ index }));
});

module.exports = log;
