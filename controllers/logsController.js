express = require("express");
logs = express.Router();
const logsArray = require("../models/log");

const validateURL = (req, res, next) => {
  console.log("This function runs on the POST bookmark");
  next();
};

logs.get("/", (req, res) => {
  res.json(logsArray);
});

logs.get("/", (req, res) => {
  res.json(logsArray);
});

logs.get("/:i", (req, res) => {
  const { i } = req.params;
  i <= logsArray.length
    ? res.json(logsArray[i])
    : res.status(404).send("404, page not found");
});

logs.post("/", validateURL, (req, res) => {
  logsArray.push(req.body);
  res.json(logsArray.at(-1));
});

// logs.all("*", (req, res) => {
//   res.status(404).send("404 Page not found");
// });

module.exports = logs;
