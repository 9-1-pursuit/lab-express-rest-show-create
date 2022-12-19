const express = require("express");
const logs = express.Router();
let logsArray = require("../models/log");

logs.get("/", (req, res) => {
  let data = [];
  const { order, mistakes, lastCrisis } = req.query;

  if (mistakes) {
    data = (function (mistakesQueryParam) {
      return logsArray.filter((log) => {
        return log.mistakesWereMadeToday.toString() === mistakesQueryParam;
      });
    })(mistakes);
  }

  if (order) {
    const sortedArray = [...logsArray].sort(
      ({ captainName: name1 }, { captainName: name2 }) => {
        if (name2 < name1) return 1;
        else if (name2 > name1) return -1;
        else return 0;
      }
    );
    if (order === "asc") data = sortedArray;
    else if (order === "desc") data = sortedArray.reverse();
  }

  if (lastCrisis) {
    if (lastCrisis === "gt10") {
      data = logsArray.filter((log) => {
        return log.daysSinceLastCrisis > 10;
      });
    } else if (lastCrisis === "gte20") {
      data = logsArray.filter((log) => {
        return log.daysSinceLastCrisis >= 20;
      });
    } else if (lastCrisis === "lte5") {
      data = logsArray.filter((log) => {
        return log.daysSinceLastCrisis <= 5;
      });
    }
  }

  if (data.length) {
    res.send(data);
  } else res.send(logsArray);
});

logs.get("/:index", (req, res) => {
  const { index } = req.params;
  logsArray[index]
    ? res.send(logsArray[index])
    : res.status(301).send({ Error: "Sorry, can't find log item" });
});

logs.post("/", (req, res) => {
  // logsArray = [...logsArray, req.body];
  logsArray.push(req.body);
  res.send(logsArray.at(-1));
});

logs.put("/:index", (req, res) => {
  const { index } = req.params;
  if (logsArray[index]) {
    logsArray[index] = req.body;
    res.send(logsArray[index]);
  } else
    res
      .status(404)
      .send(`Error: Sorry, can't find log item at index: ${index}`);
});

logs.delete("/:index", (req, res) => {
  const { index } = req.params;
  if (logsArray[index]) {
    const deletedLog = logsArray.splice(index, 1);
    res.send(deletedLog);
  } else res.status(404).send({ Error: "Sorry, can't find log item" });
});

module.exports = logs;
