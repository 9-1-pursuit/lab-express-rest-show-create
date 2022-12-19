const express = require("express");
const app = require("../app");
const logs = express.Router();
const { orderArr, filterByCrisis, validateData } = require("../functions");
const logsArr = require("../models/log");

// Index route + queries
logs.get("/", (req, res) => {
  let response = [...logsArr];
  const { order, mistakes, lastCrisis } = req.query;
  // Filter by mistakes status
  if (mistakes) {
    response = response.filter(
      (el) => el.mistakesWereMadeToday.toString() === mistakes
    );
  }
  // Filter by last crisis
  if (lastCrisis) {
    response = filterByCrisis(response, lastCrisis);
  }
  // Sort the data
  if (order) {
    orderArr(response, order, "captainName", "title");
  }

  res.status(200).json(response);
});

// Show route
logs.get("/:index", (req, res) => {
  const { index } = req.params;
  if (logsArr[index]) {
    res.status(200).json(logsArr[index]);
  } else {
    res.redirect("/not-found");
  }
});

// Create route
logs.post("/", validateData, (req, res) => {
  logsArr.push(req.body);
  res.status(200).send(logsArr);
});

module.exports = logs;
