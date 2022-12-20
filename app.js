const express = require("express");
const morgan = require("morgan");
const logsController = require("./controllers/logsController");
const logsV2Controller = require("./v2/controllers/logsController");

const app = express();
require("dotenv").config();

app.use(morgan("tiny"));
app.use(express.json());
app.use("/logs", logsController);
app.use("/v2/logs", logsV2Controller);

app.get("/", (req, res) => {
  res.send("welcome to the captain's log");
});

app.get("*", (req, res) => {
  res.status(404).send({ Error: "Page not found" });
});

module.exports = app;
