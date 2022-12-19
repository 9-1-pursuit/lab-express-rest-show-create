const express = require("express");
const app = express();
const morgan = require("morgan");
const logsController = require("./controllers/logsController");
const v2logsController = require("./v2/controllers/v2logsController");
app.use(express.json());
app.use(morgan("tiny"));
app.use("/logs", logsController);
app.use("/v2/logs", v2logsController);

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.get("/error", (req, res) => {
  res.send("404 Page not found");
});

app.get("*", (req, res) => {
  res.status(404).send("404 Page not found");
});

module.exports = app;
