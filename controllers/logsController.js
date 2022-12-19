const express = require("express");
const logs = express.Router();
let logsArray = require("../models/log");

logs.get("/", (req, res) => {
  res.send(logsArray);
});

logs.get("/:id", (req, res) => {
  const { id } = req.params;
  logsArray[id]
    ? res.send(logsArray[id])
    : res.status(301).send(`Error: Sorry, can't find log item at index: ${id}`);
});

logs.post("/", (req, res) => {
  logsArray = [...logsArray, req.body];
  res.send(logsArray.at(-1));
});

module.exports = logs;
