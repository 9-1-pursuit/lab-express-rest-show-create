// DEPENDENCIES
const express = require("express");
// CONFIGURATION
const app = express();
const morgan = require('morgan')
const logs = require('./controllers/logController')
const logsController = require('./controllers/logController')

// MIDDLEWARE


app.use(express.json());
app.use(morgan('tiny'));
app.use('/logs', logsController)

// ROUTES
app.get('/', (req, res) => {
    res.send("welcome to the captain's log")
})
app.get('/logs')

// 404 PAGE
app.get("*", (req, res) => {
    res.status(404).json({ error: "Page not found" });
  });

// EXPORT
module.exports = app