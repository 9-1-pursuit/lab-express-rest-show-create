// DEPENDENCIES
const express = require("express");

// CONFIGURATION
const app = express();
const logsController = require("./controllers/logsController")
app.use(express.json());

// ROUTES
app.get("/", (req, res) => {
  res.send("welcome to the captain's log");
});

app.use("/logs", logsController)

app.get("/*", (req, res) => {
    res.status(404).json({ error: "Page not found" });
  });

// EXPORT
module.exports = app;