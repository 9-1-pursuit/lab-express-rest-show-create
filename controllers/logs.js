//DEPENDENCIES
const express = require("express");

//CONFIGURATION
const logs = express.Router();
const logsArray = require("../models/log");

//GET ROUTE for /logs
logs.get("/logs", (req, res) => {
  res.send(logsArray);
});

//EXPORTS
module.exports = logs;
