const express = require("express")
const logs = express.Router()
const logsArray = require("../models/logs")

logs.use((req, res, next) => {
  console.log("This middleware runs for EVERY bookmark route")
  next()
})

//GET
logs.get("/", (req, res) => {
  res.json(logsArray)
})

//POST
// adds new long to end of logs array
logs.post("/", (req, res) => {
  //   logsArray.push(req.body)
  res.json(logsArray.at(-1))
})

//GET
// sends the corresponding log when index is given
// sends a redirect when an invalid index is given
logs.get("/:index", (req, res) => {
  const { index } = req.params
  if (logsArray[index]) {
    res.status(200).json(logsArray[index])
  } else {
    res.send("/*")
  }
})

// DELETE
// deletes at the index in the logs array

logs.delete("/:index", (req, res) => {
  const deletedLogs = logsArray.splice(req.params.index, 1)
  res.status(200).json(deletedLogs)
})

module.exports = logs
