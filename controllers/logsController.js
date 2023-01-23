const express = require('express')
const logs = express.Router()
const logsArray = require('../models/logsModel')

// INDEX
logs.get("/", (req, res) => {
    res.json(logsArray)
})

// ShOW
logs.get("/:arrayIndex", (req, res) => {
    try {
        const { arrayIndex } = req.params
        res.status(200).json(logsArray[arrayIndex])
    } catch (error) {
        return res.status(404).json(error)
    }
  
})

// CREATE
logs.post("/", (req, res) => {
    try {
        logsArray.push(req.body)
        res.json(logsArray[logsArray.length -1])
    } catch (error) {
        return res.status(404).json(error)
    }
})

module.exports = logs