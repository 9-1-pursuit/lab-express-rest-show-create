//Dependencies
const express = require('express')
const app = express()

const logsController = require("./controllers/logsController")

//Routes
app.use(express.json())

app.use("/logs", logsController)

//exports
module.exports = app