// Dependencies
const express = require("express");
const morgan = require("morgan");
const logsController = require("./controllers/logsController");

// Configure
const app = express();

// Middleware
app.use(express.json());
app.use(morgan("tiny"));
app.use("/logs", logsController);

// Routes
app.get("/", (req, res) => {
  res.status(200).send("Welcome to the captain's log");
});

app.get("*", (req, res) => {
  res.status(404).json({ error: "Page not found" });
});

// Export
module.exports = app;
