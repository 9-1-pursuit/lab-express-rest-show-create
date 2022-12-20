// Dependencies
const express = require("express");
const morgan = require("morgan");
const logsController = require("./controllers/logsController");
const logsControllerV2 = require("./v2/controllers/logsController");

// Configure
const app = express();

// Middleware
app.use(express.json());
app.use(morgan("tiny"));
app.use("/logs", logsController);
app.use("/v2/logs", logsControllerV2);

// Routes
app.get("/", (req, res) => {
  res.status(200).send("Welcome to the captain's log");
});

app.get("/not-found", (req, res) => {
  res.status(404).json({ error: "Page not found" });
});

app.get("/invalid-input", (req, res) => {
  res.status(422).json({
    error: "Invalid input",
    captainName: "must be a string",
    title: "must be a string",
    post: "must be a string",
    mistakesWereMadeToday: "must be a boolean",
    daysSinceLastCrisis: "must be a number",
  });
});

app.get("*", (req, res) => {
  res.redirect("/not-found");
});

// Export
module.exports = app;
