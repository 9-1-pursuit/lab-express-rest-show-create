const express = require("express")
const logs = express.Router()
const logsData = require("../models/log")

logs.get("/", (req, res) => {
    res.json(logsData)
})

// CREATE
logs.post("/", (req, res) => {
    logsData.push(req.body);
    res.json(logsData[logsData.length - 1]);
  });

  logs.get("/:arrayIndex", (req, res) => {
    const { arrayIndex } = req.params;
    if (logsData[arrayIndex]) {
      res.status(200).json(logsData[arrayIndex]);
    } else {
        res.redirect("/error");
    }
  });

  logs.delete("/:index", (req, res) => {
    const deletedLog = logsData.splice(req.params.index, 1);
    res.status(200).json(deletedLog);
  });
  
  logs.put("/:index", (req, res) => {
    const { index } = req.params;
    if (logsData[index]) {
        logsData[index] = req.body;
      res.status(200).json(logsData[index]);
    } else {
        res.redirect("/error");
    }
  });

module.exports = logs