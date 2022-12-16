const express = require("express");
const logs = express.Router();
const logsArr = require("../models/log");

const orderArr = (arr, mode, key, key2) => {
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

logs.get("/", (req, res) => {
  const response = [...logsArr];
  const { order, mistakes, lastCrisis } = req.query;
  if (order) {
    orderArr(response, order, "captainName", "title");
  }
  res.status(200).json(response);
});

module.exports = logs;
