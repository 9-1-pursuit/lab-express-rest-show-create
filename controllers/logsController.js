const express = require("express")
const logs = express.Router()
const logsArray = require("../models/logs")

logs.use((req, res, next) => {
  console.log("This middleware runs for EVERY bookmark route")
  next()
})

// GET ROUTE for /logs (app.use in app.js handles the entry point for the controller) SHOW ALL LOGS
logs.get("/", (req, res) => {
  res.json(logsArray)
})

// logs endpoint for POST
// adds new long to end of logs array
logs.post("/", (req, res) => {
  logsArray.push(req.body)
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
    res.status(404).json({ error: "Not Found" })
  }
})

// DELETE
// deletes at the index in the logs array

logs.delete("/:index", (req, res) => {})

module.exports = logs
