express = require("express");
logs = express.Router();
const logsArray = require("../models/log");
const { validateURL, validatePost } = require("../models/logsValidation");

logs.get("/", (req, res) => {
  res.status(200).json(logsArray);
});

logs.get("/:i", (req, res) => {
  const { i } = req.params;
  i <= logsArray.length ? res.json(logsArray[i]) : res.redirect("/*");
});

logs.post("/", validateURL, validatePost, (req, res) => {
  logsArray.push(req.body);
  res.json(logsArray.at(-1));
});

logs.delete("/:i", (req, res) => {
  const { i } = req.params;
  const deletedLog = logsArray.splice(i, 1);
  res.status(200) ? res.json(deletedLog) : res.status(400).redirect("/*");
});

logs.put("/:i", validatePost, (req, res) => {
  const { i } = req.params;

  if (logsArray[i]) {
    logsArray[i] = req.body;
    res.status(200).json(logsArray[i]);
  } else {
    res.status(404).redirect("/*");
  }
});

module.exports = logs;
