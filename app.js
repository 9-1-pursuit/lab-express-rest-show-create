const express = require("express")
const app = express()
const morgan = require("morgan")
const logsController=require("./controllers/logsController")

app.use((req, res, next) => {
    console.log("This code runs for every request");
    next();
  })

app.use(express.json());
app.use(morgan("tiny"));
app.use("/logs", logsController);

app.get("/", (req, res) => {
    res.send("Welcome to the Captain's Log");
  });
  app.get("*", (req, res) => {
    res.status(404).json({ error: "Page not found" });
  });
  
  module.exports = app;
  