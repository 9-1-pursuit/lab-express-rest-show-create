// DEPENDENCIES
const express = require("express");
let logsArray = require("./controllers/logController");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(express.json()); // Parse incoming JSON
app.use("/logs", logsArray);

// ROUTES
app.get("/", (req, res) => {
    res.send("welcome to the captain's log");
  });

  app.get("/logs", )
  // 404 PAGE
  app.get("*", (req, res) => {
      res.json({ error: "Page not found" });
    });
  
  // EXPORT
  module.exports = app;