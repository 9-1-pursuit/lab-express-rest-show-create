// IMPORTS
const cors = require("cors");
const express = require("express");
const morgan = require("morgan")

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());
// Bookmarks ROUTES

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to the captains log!");
});

// Logs controller
const logsController = require('./controllers/logsController');
app.use("/logs", logsController);

// 404 PAGE
app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

app.use(morgan("tiny"))


// EXPORT
module.exports = app;