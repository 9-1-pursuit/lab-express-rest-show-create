// DEPENDENCIES //
const express = require("express");

// CONFIGURATION //
const app = express();
const logs = require("./controllers/logs");

// MIDDLEWARE //
app.use(express.json());

app.use((req, res, next) => {
  console.log("this code runs for every request");
  next();
});

app.use("/logs", logs);

// ROUTES //
app.get("/", (req, res) => {
  res.send(`welcome to the captin's log`);
});

// EXPORT //
module.exports = app;
