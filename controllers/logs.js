const express = require("express")
const router = express.Router()
const data = require("../models/captainData.js")
const {logQueries} = require("../models/logsFunctions.js")

// root for /logs route
router.get("/", (req, resp) => {  
    const  query  = req.query
    Object.keys(query).length  ?  resp.json(logQueries(query, [...data])) : resp.json(data)
    
    
})

module.exports = router