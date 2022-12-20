const express = require("express");
const app = require("../app");
const logs = express.Router();
const {
  orderArr,
  filterByCrisis,
  validateData,
  notFound,
} = require("../functions");
const logsArr = require("../models/log");

// Index + queries
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
  // Sort entries
  if (order) {
    orderArr(response, order, "captainName", "title");
  }

  res.status(200).json(response);
});

// Show
logs.get("/:index", (req, res) => {
  const { index } = req.params;
  if (!logsArr[index]) {
    return notFound(res);
  }
  res.status(200).json(logsArr[index]);
});

// Create
logs.post("/", validateData, (req, res) => {
  logsArr.push(req.body);
  res.status(200).json(logsArr);
});

// Destroy
logs.delete("/:index", (req, res) => {
  const { index } = req.params;
  if (!logsArr[index]) {
    return notFound(res);
  }
  logsArr.splice(index, 1);
  res.status(200).json(logsArr);
});

// Update
logs.put("/:index", validateData, (req, res) => {
  const { index } = req.params;
  if (!logsArr[index]) {
    return notFound(res);
  }
  logsArr[index] = req.body;
  res.status(200).json(logsArr[index]);
});

module.exports = logs;
