const express = require("express");
// bring in controllers
const logController = require("./controllers/logController");

const app = express();
// const morgan = require("morgan");
app.use(express.json())
app.use("/logs", logController);

app.get("/", (req, res) => {
  res.send(`welcome to the captain's log`);
});
app.get("*", (req, res) => {

  res.status(404).json({ error: `Sorry, no page found!` });
});
module.exports = app;
