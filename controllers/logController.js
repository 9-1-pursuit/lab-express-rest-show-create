const express = require('express')
const log = express.Router()
const logsArray = require('../models/log')

log.get('/', (req, res)=>{
    res.json(logsArray)
})

log.post('/', (req, res)=>{
    logsArray.push(req.body)
    res.json(logsArray[logsArray.length - 1])
})

log.get('/:index', (req, res) =>{
    const {index} = req.params
    if(logsArray[index]){
        res.status(200).json(logsArray[index])
    }else{
        res.status(404).redirect('/logs')
    }
})

log.put('/index', (req, res) =>{
    logsArray[index] = req.body
    res.status(200).json(logsArray[req.params.index])
})

log.delete('/:index', (req, res)=>{
    const deletedLogs = logsArray.splice(req.params.index, 1)
    res.status(200).json(deletedLogs)
})

module.exports = log