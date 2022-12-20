const express = require("express");
const logsController = require("./controllers/logsController");
const app = express();
const cors = require("cors");

//use
app.use(express.json());
app.use(cors());
app.use("/logs", logsController);

//routes
app.get("/", (req, res) => {
  res.send("welcome to the captain's log");
});

app.get("*", (req, res) => {
  res.status(404).json({ error: "Not Found" });
});
//export
module.exports = app;
