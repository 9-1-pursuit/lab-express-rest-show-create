const express = require("express");
const logs = express.Router();
const { validateURL } = require("../models/validations");
const logsArray = require("../models/log");


logs.use((req, res, next) => {
  console.log("This middleware runs for every log route");
  next();
});

logs.get("/", (req, res) => {
  res.json(logsArray);
});


// /logs endpoint for POST
logs.post("/", validateURL, (req, res) => {
  logsArray.push(req.body);
  res.json(logsArray.at(-1));
});

logs.get("/:index", (req, res) => {
  const {index} = req.params
  if (logsArray[index]) {
    res.status(200).json(logsArray[index]); 
  } else{
    res.redirect('/*');
  }res.status(404).json({ error: "Not Found" });
  
});


logs.delete("/:index", (req, res) => {
  const deletedLog = logsArray.splice(req.params.index, 1);
  res.status(200).json(deletedLog);
});

logs.put("/:index", (req, res) => {
  const { index } = req.params;
  if (logsArray[index]) {
    logsArray[index] = req.body;
    res.status(200).json(logsArray[index]);
  }else{
    res.redirect('/*');
  }
});


module.exports = logs;