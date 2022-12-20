const express = require("express");
const log = express.Router();
const logsArray = require("../models/log");
const { validateURL, validateCaptainName } = require("../models/validations");

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

// ASCENDING ROUTE
log.get("/", (req, res) => {
  const { order, mistakes, lastCrisis } = req.query;
  console.log(req.query);
  if (order === "asc") {
    const sortedAsc = logsArray.sort((a, b) => {
      if (a.captainName.charAt(0) < b.captainName.charAt(0)) {
        return -1;
      }
      if (a.captainName.charAt(0) > b.captainName.charAt(0)) {
        return 1;
      }
      return 0;
    });
    res.json(sortedAsc);
  } else if (order === "desc") {
    const sortedDesc = logsArray.sort((a, b) => {
      if (a.captainName.charAt(0) < b.captainName.charAt(0)) {
        return 1;
      }
      if (a.captainName.charAt(0) > b.captainName.charAt(0)) {
        return -1;
      }
      return 0;
    });
    res.json(sortedDesc);
  } else if (mistakes === "true") {
    res.json(logsArray.filter((el) => el.mistakesWereMadeToday === true));
  } else if (mistakes === "false") {
    res.json(logsArray.filter((el) => el.mistakesWereMadeToday === false));
  } else if (lastCrisis === "gte20") {
    res.json(logsArray.filter((el) => el.daysSinceLastCrisis >= 20));
  } else if (lastCrisis === "gt10") {
    res.json(logsArray.filter((el) => el.daysSinceLastCrisis > 10));
  } else if (lastCrisis === "lte5") {
    res.json(logsArray.filter((el) => el.daysSinceLastCrisis <= 5));
  } else {
    res.json(logsArray);
  }
  console.log(validateCaptainName(logsArray.map((el) => el.captainName)));
});

// SHOW;
log.get("/:index", (req, res) => {
  const { index } = req.params;
  if (logsArray[index]) {
    res.status(200).json(logsArray[index]);
  } else {
    res.redirect("/*");
  }
});

// PART 3 BONUS
log.put("/:index", validateURL, (req, res) => {
  if (logsArray[req.params.index]) {
    logsArray[req.params.index] = req.body;
    res.status(200).json(logsArray[req.params.index]);
  } else {
    res.status(404).json({ error: "Not Found" });
  }
});

module.exports = log;
