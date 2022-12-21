//DEPENDENCIES
const express = require("express")
const logsArray = require("../models/log")
const logs = express.Router()

//ROUTES for GET requests
logs.get("/", (req, res) => {
    res.send(logsArray)
})

logs.get("/:index", (req, res) => {
    const { index } = req.params
    if(logsArray[index]){
        res.status(200).send(logsArray[index])
    } else {
        res.status(404).redirect("/error")
    }
})

logs.get("/")

//ROUTE for PUT request
logs.post("/", (req, res) => {
    logsArray.push(req.body)
    res.send(logsArray[-1])
})

//ROUTE for DELETE request
logs.delete("/:index", (req, res) => {
    const { index } = req.params
    const deletedLog = logsArray.splice(index, 1)
    res.status(200).send(deletedLog)
})

//EXPORT
module.exports = logs