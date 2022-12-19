const express = require("express");
const logs = express.Router();
let logsArray = require("../models/log.js");

//show all logs
// logs.get("/", (req, res) => {
//   res.json(logsArray);
// });

const array = [];
const validateObj = (req, res, next) => {
  const isValid = logsArray.map((log) => {
    if (
      typeof log.captainName === "string" &&
      typeof log.title === "string" &&
      typeof log.post === "string" &&
      typeof log.mistakesWereMadeToday === "boolean" &&
      typeof log.daysSinceLastCrisis === "number"
    )
      array.push(log);
  });
  next();
};
console.log(array);
//ascending alphabetic order
logs.get("/", validateObj, (req, res) => {
  const { order, mistakes, lastCrisis } = req.query;

  if (order === "asc") {
    let ascending = Object.values(
      logsArray.sort((a, b) => {
        if (a.captainName.charAt(0) < b.captainName.charAt(0)) {
          return -1;
        }
        if (a.captainName.charAt(0) > b.captainName.charAt(0)) {
          return 1;
        }
        return 0;
      })
    );

    res.json(ascending);
  } else if (order === "desc") {
    const sortedDescending = logsArray.sort((a, b) => {
      if (a.captainName.charAt(0) > b.captainName.charAt(0)) {
        return -1;
      }
      if (a.captainName.charAt(0) < b.captainName.charAt(0)) {
        return 1;
      }
      return 0;
    });
    res.json(sortedDescending);
  }
  if (mistakes === "true") {
    console.log(mistakes, "true");
    const withMistakes = logsArray.filter((el) => {
      return el.mistakesWereMadeToday === true;
    });
    res.json(withMistakes);
  } else if (mistakes === "false") {
    console.log(mistakes, "false");
    const withoutMistakes = logsArray.filter((el) => {
      return el.mistakesWereMadeToday === false;
    });
    res.json(withoutMistakes);
  }
  if (lastCrisis === "lte5") {
    const gt5 = logsArray.filter((el) => el.daysSinceLastCrisis <= 5);
    res.json(gt5);
  } else if (lastCrisis === "gt10") {
    const gt10 = logsArray.filter((el) => el.daysSinceLastCrisis > 10);
    res.json(gt10);
  } else if (lastCrisis === "gte20") {
    const gt20 = logsArray.filter((el) => el.daysSinceLastCrisis >= 20);
    res.json(gt20);
  }

  if (!mistakes && !order && !lastCrisis) {
    res.json(logsArray);
  }
});
//post
logs.post("/", (req, res) => {
  logsArray.push(req.body);
  res.json(logsArray.at(-1));
});
//show
logs.get("/:index", (req, res) => {
  const { index } = req.params;
  if (logsArray[index]) res.send(logsArray[index]);
  else {
    res.redirect("/error");
  }
});

//delete logs
logs.delete("/:index", (req, res) => {
  if (logsArray[req.params.index]) {
    const deleted = logsArray.splice(req.params.index, 1);
    res.status(200).json(deleted);
  } else {
    res.status(404).json({ error: "Not Found" });
  }
});
//put logs
logs.put("/:index", (req, res) => {
  if (logsArray[req.params.index]) {
    logsArray[req.params.index] = req.body;
    res.status(200).json(logsArray[req.params.index]);
  } else {
    res.status(404).json({ error: "Not found" });
  }
});

module.exports = logs;
