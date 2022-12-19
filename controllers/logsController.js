const express = require("express");
const logs = express.Router();
const { orderArr, filterByCrisis } = require("../functions");
const logsArr = require("../models/log");

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

module.exports = logs;
