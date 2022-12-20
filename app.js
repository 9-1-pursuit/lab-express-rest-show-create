const express = require("express");
const app = express();
const morgan = require("morgan");
const log = require("./controllers/logsController");

app.use((req, res, next) => {
  console.log("This code runs for every request");
  next();
});
app.use(express.json());
app.use(morgan("tiny"));
app.use("/logs", log);

app.get("/", (req, res) => {
  res.send("Welcome to the Captain's Log");
});

// 404 PAGE
app.get("*", (req, res) => {
  res.status(404).json({ error: "Page not found" });
});

module.exports = app;
