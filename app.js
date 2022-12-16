const express = require('express')
const app = express()

const logsController = require("./controllers/logsController")

app.use(express.json())


app.use("/logs", logsController)

module.exports = app