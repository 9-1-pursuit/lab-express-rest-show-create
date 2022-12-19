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

log.delete("/:index", (req, res) => {
  logArray.pop(req.body);
  res.json(logArray.at({ index }));
});

//BONUS
log.put("/:index", (req, res) => {
  if (logArray[req.params.index]) {
    logArray[req.params.index] = req.body;
    res.status(200).json(logArray[req.params.index]);
  } else {
    res.status(404).json({ error: "Not Found" });
  }
});

module.exports = log;
