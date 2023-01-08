const express = require("express")
const logs = express()
const logsArray = require("../models/log")

logs.use(express.json())

//INDEX

logs.get('/', (req, res) => {
    res.json(logsArray) 
})

//SHOW
logs.get("/:index", (req, res) => {
    const { index } = req.params;
    if (logsArray[index]) {
      res.status(200).json(logsArray[index]);
    } else {
      res.status(404).redirect('/404');
    }
  });

//CREATE
logs.post("/", (req, res) => {
    logsArray.push(req.body);
    res.json(logsArray.at(-1));
  });

//UPDATE
logs.put("/:index", (req, res) => {
    const { index } = req.params;
    if (logsArray[index]) {
      logsArray[index] = req.body;
      res.status(200).json(logsArray[index]);
    } else {
      res.status(404).json({ message: "Not Found" });
    }
  });

//DELETE

logs.delete('/:index', (req, res) => {
    const deletedLog = logsArray.splice(req.params.index, 1)
    res.status(200).json(deletedLog)
  })


module.exports = logs