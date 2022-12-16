const express = require("express")
const app = express()
app.use(express.json())



// Routes for Home
app.get("/", (req, resp) => {
    resp.send("Captain's Log")
})
module.exports = app