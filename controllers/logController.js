const express = require("express");
const logs = express.Router();
const logsArray = require("../models/log");

logs.get("/", (req, res) => {
  res.json(logsArray);
});
//CREATE
logs.post("/", (req, res) => {
  logsArray.push(req.body);
  res.json(logsArray.at(-1));
});
//DELETE
logs.delete("/:index", (req, res) => {
  const { index } = req.params;
  if (logsArray[index]) {
    const deletedLogs = logsArray.splice(index, 1);
    res.status(200).json(deletedLogs);
  } else {
    res.status(404).json({ msg: "Not Found!" });
  }
});

//Get -- READ one based on index
logs.get("/:index", (req, res) => {
  const { index } = req.params;
  if (logsArray[index]) {
    res.status(200).json(logsArray[index]);
  } else {
    res.redirect("/*");
  }
});
//PUT
logs.put("/:index",(req,res)=>{
    const { index } = req.params;
    if(logsArray[index]){
        logsArray[index]= req.body
        res.status(200).json(logsArray[index])
    }
    else{
        res.status(404).json({ msg: "Not Found!" });
    }
})
module.exports = logs;
