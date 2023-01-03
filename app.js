const express = require('express')
const app = express()
const cors = require("cors");

const logController = require('./controllers/logController')

app.use(express.json())


app.use(cors());
app.use('/logs', logController)

module.exports = app