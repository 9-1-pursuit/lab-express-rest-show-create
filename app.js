const express = require('express')
const app = express()
const cors = require("cors");

const logController = require('./controllers/logController')

app.use(express.json())

app.use('/logs', logController)

app.use(cors());

module.exports = app