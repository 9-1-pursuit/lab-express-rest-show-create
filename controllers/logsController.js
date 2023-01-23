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
        return res.status(404).json({error: "Not Found" })
    }
})

// DELETE
logs.delete("/:arrayIndex", (req, res) => {
    try {
        const deletedLog = logsArray.splice(req.params.arrayIndex, 1)
        res.status(200).json(deletedLog)
    } catch (error) {
        res.status(404).json({error: "Not Found" })
    }
})

// UPDATE
logs.put("/:arrayIndex", (req, res) => {
    try {
        logsArray[req.params.arrayIndex] = req.body
        res.status(200).json(logsArray[req.params.arrayIndex])
    } catch (error) {
        res.status(404).json({error: "Not Found" })
    }
    
})

module.exports = logs