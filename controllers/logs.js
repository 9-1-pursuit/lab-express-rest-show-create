const express = require("express")
const router = express.Router()
const data = require("../models/captainData.js")

router.get("/", (req, resp) => {
    resp.send(data)
})

module.exports = router