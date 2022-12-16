const express = require("express")
const app = express()
app.use(express.json())

app.use("/logs", require("./controllers/logs.js"))


// Routes for Home
app.get("/", (req, resp) => {
    resp.send("Captain's Log")
})
module.exports = app