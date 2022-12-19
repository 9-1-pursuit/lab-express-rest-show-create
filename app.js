const express = require('express')
const app = express()

const logController = require('./controllers/logController')

app.use(express.json())

app.use('/logs', logController)

module.exports = app