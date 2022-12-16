express = require("express");
logs = express.Router();
const logsArray = require("../models/log");

const validateURL = (req, res, next) => {
  console.log("This function runs on the POST bookmark");
  next();
};

logs.get("/", (req, res) => {
  res.json(logsArray);
});

logs.get("/:i", (req, res) => {
  const { i } = req.params;
  i > logsArray.length
    ? res.send("404 page not found")
    : res.json(logsArray[i]);
});

logs.post("/", validateURL, (req, res) => {
  logsArray.push(req.body);
  res.json(logsArray.at(-1));
});

module.exports = logs;
