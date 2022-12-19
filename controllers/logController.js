const express = require("express");
const logs = express.Router();
const logsArray = require("../models/log");

// show all logs
// logs.get("/", (req, res) => {
//   res.json(logsArray);
// });

// CREATE
logs.post("/", (req, res) => {
  logsArray.push(req.body);
  res.json(logsArray.at(-1));
});

// Bonus PART 1
//*ORDER by Capt name
logs.get("/", (req, res) => {
  const { order, mistakes, lastCrisis } = req.query;

  if (order === "asc") {
    const sortCaptainsAsc = logsArray.sort((a, b) => {
      if (a.captainName.charAt(0) < b.captainName.charAt(0)) {
        return -1;
      } else if (a.captainName.charAt(0) > b.captainName.charAt(0)) {
        return 1;
      }
      return 0;
    });
    res.json(sortCaptainsAsc);
  } else if (order === "desc") {
    const sortCaptainsDesc = logsArray.sort((a, b) => {
      if (a.captainName.charAt(0) > b.captainName.charAt(0)) {
        return -1;
      }
      if (a.captainName.charAt(0) < b.captainName.charAt(0)) {
        return 1;
      }
      return 0;
    });
    res.json(sortCaptainsDesc);
  }
  //* Mistakes
  else if (mistakes === "true") {
    const truthy = logsArray.filter(
      (val) => val.mistakesWereMadeToday === true
    );
    res.json(truthy);
  } else if (mistakes === "false") {
    const falsey = logsArray.filter(
      (val) => val.mistakesWereMadeToday === false
    );
    res.json(falsey);
  }
  //* Crisis
  else if (lastCrisis === "gt10") {
    const gt10 = logsArray.filter((val) => val.daysSinceLastCrisis > 10);
    res.json(gt10);
  } else if (lastCrisis === "gte20") {
    const gte20 = logsArray.filter((val) => val.daysSinceLastCrisis >= 20);
    res.json(gte20);
  } else if (lastCrisis === "lte5") {
    const lte5 = logsArray.filter((val) => {
      return val.daysSinceLastCrisis <= 5;
    });
    res.json(lte5);
  }
  //*
  else {
    res.json(logsArray);
  }
});

// DELETE
logs.delete("/:index", (req, res) => {
  const { index } = req.params;
  console.log(index);
  if (logsArray[index]) {
    const deletedLogs = logsArray.splice(index, 1);
    res.status(200).json(deletedLogs);
  } else {
    res.status(404).json({ msg: "Not Found!" });
  }
});

// GET -- READ one based on index
logs.get("/:index", (req, res) => {
  const { index } = req.params;
  if (logsArray[index]) {
    res.status(200).json(logsArray[index]);
  } else {
    res.redirect("/*");
  }
});

// PUT
logs.put("/:index", (req, res) => {
  const { index } = req.params;
  if (logsArray[index]) {
    logsArray[index] = req.body;
    res.status(200).json(logsArray[index]);
  } else {
    res.status(404).json({ msg: "Not Found!" });
  }
});

module.exports = logs;
