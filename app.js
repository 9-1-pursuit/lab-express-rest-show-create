const express = require("express");
const morgan = require("morgan");
const logsController = require("./controllers/logsController");

const app = express();
require("dotenv").config();

app.use(morgan("tiny"));
app.use(express.json());
app.use("/logs", logsController);

app.get("/", (req, res) => {
  res.send("welcome to the captain's log");
});

module.exports = app;
