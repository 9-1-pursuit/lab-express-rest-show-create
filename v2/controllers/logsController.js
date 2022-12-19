const express = require("express")
const router = express.Router()
const data = require("../../models/log.js")


router.get("/", (req, resp) => {
    let display = ""
    data.forEach((obj, i) => 
       display += `<a href="/v2/logs/${i}">${obj.captainName}</a><br>`
    )
    resp.send(display)
})

router.get("/:index", (req, resp) => {
    const {index} = req.params
    const backButton = `
    <button>
        <a href ="/v2/logs"
        >V2 Logs Home</a>
    </button>`
    
    const showData = `
    <h1>${data[index].title}</h1>
    <p>${data[index].post}</p>
    ${backButton}`
    const display = data[index] ? showData : resp.redirect("/*")

    resp.send(display)
})

module.exports = router