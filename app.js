const express = require("express");
const app = express();
const morgan = require("morgan");
const logsController = require("./controllers/logsController");
app.use(express.json());
app.use(morgan("tiny"));
app.use("/logs", logsController);

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.get("*", (req, res) => {
  res.send("404 Page not found");
});

module.exports = app;
