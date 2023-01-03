const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan")
const logsController = require("./controllers/logsController");

app.use((req, res, next) => {
  // console.log("This code runs for every request");
  next();
});

// CONFIGURATION
app.use(express.json());
app.use(morgan("tiny"))
app.use(cors());

// ROUTES
app.use("/logs", logsController);
app.get("/", (req, res) => {
  res.send("Welcome to Captain's Log App");
});
 

app.get("*", (req, res) => {
    res.status(404).json({ error: "Page not found" });
  });

// EXPORT
module.exports = app;

