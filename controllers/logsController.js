const express = require("express");
const logs = express.Router();
const logsArr = require("../models/log");

const orderArr = (arr, mode, key, key2) => {
  // ascending order, if first key is the same, checks the second
  if (mode === "asc") {
    arr.sort((a, b) => {
      let valA = a[key].toLowerCase();
      let valB = b[key].toLowerCase();
      if (valA < valB) {
        return -1;
      }
      if (valA > valB) {
        return 1;
      }
      valA = a[key2].toLowerCase();
      valB = b[key2].toLowerCase();
      if (valA < valB) {
        return -1;
      }
      if (valA > valB) {
        return 1;
      }
      return 0;
    });
  }
  // descending order, if first key is the same, checks the second
  if (mode === "desc") {
    arr.sort((a, b) => {
      let valA = a[key].toLowerCase();
      let valB = b[key].toLowerCase();
      if (valA > valB) {
        return -1;
      }
      if (valA < valB) {
        return 1;
      }
      valA = a[key2].toLowerCase();
      valB = b[key2].toLowerCase();
      if (valA > valB) {
        return -1;
      }
      if (valA < valB) {
        return 1;
      }
      return 0;
    });
  }
};

const filterByCrisis = (arr, entry) => {
  let num;
  let filteredArr;
  if (entry.includes("gte")) {
    num = +entry.replace("gte", "");
    filteredArr = arr.filter((el) => el.daysSinceLastCrisis >= num);
  } else if (entry.includes("gt")) {
    num = +entry.replace("gt", "");
    filteredArr = arr.filter((el) => el.daysSinceLastCrisis > num);
  } else if (entry.includes("lte")) {
    num = +entry.replace("lte", "");
    filteredArr = arr.filter((el) => el.daysSinceLastCrisis <= num);
  } else if (entry.includes("lt")) {
    num = +entry.replace("lt", "");
    filteredArr = arr.filter((el) => el.daysSinceLastCrisis < num);
  }
  return filteredArr;
};

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
