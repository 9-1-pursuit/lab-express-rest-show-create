const express = require("express");
const app = express();

const logsController = require("./controllers/logsController.js");

app.use((req, res, next) => {
  console.log("This code runs for every request");
  next();
});

app.use(express.json());
app.use("/logs", logsController);

app.get("/", (req, res) => {
  res.send("Welcome to the Captain's Log");
});

module.exports = app;
