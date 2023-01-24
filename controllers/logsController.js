// const { json } = require("express");
const express = require("express");
const logs = express();
const logsArray = require("../models/logs.js");

//INDEX

logs.get("/", (req, res) => {
  const foo = JSON.parse(JSON.stringify(logsArray));
  res.status(200).json(foo);
});

//SHOW

logs.get("/:arrayIndex", (req, res) => {
  if (logsArray[req.params.arrayIndex]) {
    res.json(logsArray[req.params.arrayIndex]);
  } else {
    res.status(404).redirect("/404");
  }
});

//UPDATE

logs.put("/:arrayIndex", (req, res) => {
  logsArray[req.params.arrayIndex] = req.body; // what is req dot body
  res.status(200).json(logsArray[req.params.arrayIndex]);
});

//CREATE

logs.post("/", (req, res) => {
  logsArray.push(req.body);
  res.json(logsArray[logsArray.length - 1]);
});
// DELETE

logs.delete("/:arrayIndex", (req, res) => {
  const deletelog = logsArray.splice(req.params.arrayIndex, 1);
  res.status(200).json(deletelog); // this couldnt be a one liner?
});

module.exports = logs;

// need help with axios  , morgan (tiny) , destructuring, nodemon errors,

//express
