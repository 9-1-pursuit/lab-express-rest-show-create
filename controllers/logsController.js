const express = require("express");
const log = express.Router();
const logsArray = require("../models/log");
const validateURL = (req, res, next) => {
  console.log(
    "This function checks the validity of the POST entered by the user"
  );
  next();
};

// BOOKMARKS ROUTE
log.get("/", (req, res) => {
  res.json(logsArray);
});

// SHOW
log.get("/:index", (req, res) => {
  const { index } = req.params;
  if (logsArray[index]) {
    res.status(200).json(logsArray[index]);
  } else {
    res.redirect("/*");
  }
});

// logs endpoint for POST
log.post("/", validateURL, (req, res) => {
  logsArray.push(req.body);
  res.json(logsArray.at(-1));
});

// logs endpoint for Delete
log.delete("/:id", (req, res) => {
  logsArray.pop(req.body);
  res.json(logsArray.at(0));
});

module.exports = log;
