const express = require("express");
const logs = express.Router();
let logsArray = require("../models/log");

logs.get("/", (req, res) => {
  res.send(logsArray);
});

logs.get("/:index", (req, res) => {
  const { index } = req.params;
  logsArray[index]
    ? res.send(logsArray[index])
    : res
        .status(301)
        .send(`Error: Sorry, can't find log item at index: ${index}`);
});

logs.post("/", (req, res) => {
  logsArray = [...logsArray, req.body];
  res.send(logsArray.at(-1));
});

logs.put("/index", (req, res) => {
  const { index } = req.params;
  if (logsArray[index]) {
    logsArray[index] = req.body;
    res.send(logsArray[index]);
  } else
    res
      .status(404)
      .send(`Error: Sorry, can't find log item at index: ${index}`);
});

module.exports = logs;
