const express = require('express')
const logs = express.Router() 
const logsArray = require("../models/log")

logs.get("/", (req , res) => {
    res.json(logsArray)
})


logs.post("/", (req ,res) => {
    logsArray.push(req.body);
    res.json(logsArray[logsArray.length - 1])
})

logs.get("/:index", (req , res) => {
    const {index} = req.params
    if(logsArray[index]){
        res.status(200).json(logsArray[index])
    }
    else{
        res.status(404).redirect("/logs")
    }
})

module.exports = logs