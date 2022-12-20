const express = require("express");
const log = express.Router();
const logsArray = require("../models/log");
const validateURL = (req, res, next) => {
    console.log("This function runs on the POST log");
    next();
  };


log.use((req, res, next) => {
    console.log("This function checks the validity of the POST entered by the user");
    next();
  });

// / GET ROUTE FOR
log.get("/", (req, res) => {
  res.json(logsArray);
});

// logs endpoint for POST
log.post("/", validateURL, (req, res) => {
    logsArray.push(req.body);
    res.json(logsArray.at(-1));
  });

// SHOW ROUTE
log.get("/:index", (req, res) => {
    const { index } = req.params;
    if (logsArray[index]) {
      res.status(200).json(logsArray[index]);
    } else {
      res.redirect("/*");
    }
  });

// DELETE
log.delete("/:id", (req, res) => {
  logsArray.pop(req.body);
  res.json(logsArray.at(0));
});

module.exports = log;