//DEPENDENCIES
const express = require("express")
const logsArray = require("../models/log")
const { validateData } = require("../validations/validation")
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

//ROUTE for POST request
logs.post("/", validateData, (req, res) => {
    logsArray.push(req.body)
    res.send(logsArray[-1])
})

//ROUTE for DELETE request
logs.delete("/:index", (req, res) => {
    const { index } = req.params
    const deletedLog = logsArray.splice(index, 1)
    res.status(200).send(deletedLog)
})

//ROUTE for PUT request
logs.put("/:index", (req, res) => {
    const { index } = req.params
    if(logsArray[index]){
        logsArray[index] = req.body
        res.status(200).send(logsArray[index])
    } else {
        res.status(404).redirect("/error")
    }
})

//EXPORT
module.exports = logs