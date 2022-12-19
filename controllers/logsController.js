express = require("express");
logs = express.Router();
const logsArray = require("../models/log");
const { validateURL, validatePost } = require("../models/logsValidation");

// const validateURL = (req, res, next) => {
//   console.log("This function runs on the POST bookmark");
//   next();
// };

logs.get("/", (req, res) => {
  res.json(logsArray);
});

logs.get("/:i", (req, res) => {
  const { i } = req.params;
  i <= logsArray.length ? res.json(logsArray[i]) : res.redirect("/*");
});

logs.post("/", validateURL, validatePost, (req, res) => {
  logsArray.push(req.body);
  res.json(logsArray.at(-1));
});

logs.delete("/:i", (req, res) => {
  const { i } = req.params;
  const deletedLog = logsArray.splice(i, 1);
  res.status(200)
    ? res.json(deletedLog)
    : res.status(400).json({ error: "Not Found" });
});

logs.put("/:i", validatePost, (req, res) => {
  const { i } = req.params;

  if (logsArray[i]) {
    logsArray[i] = req.body;
    res.status(200).json(logsArray[i]);
  } else {
    res.status(404).json({ error: "Not Found" });
  }
});

// logs.all("*", (req, res) => {
//   res.status(404).send("404 Page not found");
// });

module.exports = logs;
