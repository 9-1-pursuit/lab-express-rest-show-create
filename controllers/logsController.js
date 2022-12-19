const express = require("express")
const logs = express.Router()
let logsArray = require("../models/logs")

logs.use((req, res, next) => {
  console.log("This middleware runs for EVERY bookmark route")
  next()
})

// GET ROUTE for /logs (app.use in app.js handles the entry point for the controller) SHOW ALL LOGS
logs.get("/", (req, res) => {
  res.json(logsArray)
})

// logs endpoint for POST
logs.post("/", (req, res) => {
  logsArray.push(req.body)
  res.json(logsArray.at(-1))
})

module.exports = logs
