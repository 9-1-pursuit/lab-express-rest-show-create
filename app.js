//DEPENDENCIES
const express = require("express");

//CONFIGURATION
const app = express();
const logs = require("./controllers/logs");

//MIDDLEWARE
app.use("/", logs);

//ROUTES
app.get("/", (req, res) => {
  res.send(`welcome to the captin's log`);
});

//EXPORT
module.exports = app;
