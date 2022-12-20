const express = require('express');
const logs = express.Router();
const logsArray = require('../models/log');
const { validateURL } = require('../models/validations')

logs.get("/", (req, res) => {
    res.json(logsArray);
  });


// Create
logs.post('/', validateURL, (req, res) => {
    logsArray.push(req.body);
    res.json(logsArray.at(-1));
});

logs.get('/:index', (req, res) => {
    const { index } = req.params;
    if (logsArray[index]){
      res.status(200).json(logsArray[index])
    }else{
      res.redirect('/*');
    }
});

// Delete 
logs.delete('/:index', (req,res) => {
    const deletedLog = logsArray.splice(req.params.index, 1);
    res.status(200).json(deletedLog);
  });
  
  // UPDATE
  logs.put("/:arrayIndex", validateURL, (req, res) => {
    if (logsArray[req.params.index]) {
      logsArray[req.params.index] = req.body;
      res.status(200).json(logsArray[req.params.index]);
    } else {
      res.status(404).json({ error: "Not Found" });
    }
  });
  
  module.exports = logs;