const express = require("express")
const app = express()
const morgan = require("morgan")
const logsController = require("./controllers/logsController.js")

app.use((re, res, next) => {
  console.log("This code runs for every request")
  next()
})

app.use(express.json())
app.use(morgan("tiny"))
app.use("/logs", logsController)

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to the captain's")
})

app.get("*", (req, res) => {
  res.status(404).json({ error: "Page Not Found" })
})
module.exports = app
