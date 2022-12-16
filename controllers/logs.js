const express = require("express")
const router = express.Router()
const data = require("../models/captainData.js")
const {logQueries} = require("../models/logsFunctions.js")

// root for /logs route
router.get("/", (req, resp) => {    
    const orderQuery = logQueries(req, "order", data)
    
    orderQuery  ? resp.send(orderQuery) : resp.send(data)
    
})

module.exports = router