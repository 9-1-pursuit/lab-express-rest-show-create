// DEPENDENCIES //
const express = require("express");

//CONFIGURATION //
const logs = express.Router();
const { validateURL } = require("../models/validation");
const logsArray = require("../models/log");

//GET ROUTE for /logs //
logs.get("/", (req, res) => {
  res.send(logsArray);
});

// CREATE ROUTE //
logs.post("/", validateURL, (req, res) => {
  logsArray.push(req.body);
  res.json(logsArray[logsArray.length - 1]);
});

// SHOW ROUTES //
logs.get("/:index", (req, res) => {
  const { index } = req.params;
  if (logsArray[index]) res.send(logsArray[index]);
  else res.redirect("/not-found");
});
// UPDATE //
logs.put("/:index", (req, res) => {
  const { index } = req.params;
  if (logsArray[index]) {
    logsArray[index] = req.body;
    res.status(200).json(logsArray[index]);
  } else {
    res.status(404).json({ errorMessage: "Not Found" });
  }
});

// DELETE //
logs.delete("/:index", (req, res) => {
  const { index } = req.params;
  if (logsArray[index]) {
    const deletedLog = logsArray.splice(index, 1);
    res.status(200).json(deletedLog);
  }
});

// EXPORTS //
module.exports = logs;
