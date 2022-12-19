const express = require("express");
const log = express.Router();
const logArray = require("../models/log");
const { validateURL } = require("../models/validation");

log.get("/", (req, res) => {
  const { order, mistakes, crisis } = req.query;

  if (order === "asc") {
    const ascend = logArray.sort((a, b) => {
      if (a.captainName.charAt(0) < b.captainName.charAt(0)) {
        return -1;
      } else if (a.captainName.charAt(0) > b.captainName.charAt(0)) {
        return 1;
      } else {
        return 0;
      }
    });
    res.json(ascend);
  } else if (order === "desc") {
    const descend = logArray.sort((a, b) => {
      if (a.captainName.charAt(0) > b.captainName.charAt(0)) {
        return -1;
      } else if (a.captainName.charAt(0) < b.captainName.charAt(0)) {
        return 1;
      } else {
        return 0;
      }
    });
    res.json(descend);
  } else if (mistakes === "true") {
    const mistake = logArray.filter((a) => a.mistakesWereMadeToday === true);
    res.json(mistake);
  } else if (mistakes === "false") {
    const notMistake = logArray.filter(
      (b) => b.mistakesWereMadeToday === false
    );
    res.json(notMistake);
  } else if (crisis === "gte20") {
    const twentyDays = logArray.filter((c) => c.daysSinceLastCrisis >= 20);
    res.json(twentyDays);
  } else if (crisis === "gt10") {
    const tenDays = logArray.filter((a) => a.daysSinceLastCrisis > 10);
    res.json(tenDays);
  } else if (crisis === "lte5") {
    const fiveDays = logArray.filter((a) => a.daysSinceLastCrisis <= 5);
    res.json(fiveDays);
  } else {
    res.json(logArray);
  }
});

log.post("/", validateURL, (req, res) => {
  logArray.push(req.body);
  res.json(logArray[logArray.length - 1]);
});

log.get("/:index", (req, res) => {
  const { index } = req.params;
  const { a, b } = req.query;
  if (logArray[index]) {
    res.status(200).json(logArray[index]);
  } else {
    res.redirect("/*");
  }
});

log.delete("/:id", (req, res) => {
  logArray.pop(req.body);
  res.json(logArray.at({ id }));
});

log.put("/:id", validateURL, (req, res) => {
  if (logArray[req.params.id]) {
    logArray[req.params.id] = req.body;
    res.status(200).json(logArray[req.params.id]);
  } else {
    res.status(404).json({ error: "Not Found" });
  }
});

module.exports = log;
