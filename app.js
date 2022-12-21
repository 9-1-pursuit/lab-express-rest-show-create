const express = require("express")
const app = express()
const cors = require("cors")
app.use(express.json())
app.use(cors())

app.use("/logs", require("./controllers/logs.js"))
// v2/controller
app.use("/v2/logs", require("./v2/controllers/logsController.js"))


// Routes for Home
app.get("/", (req, resp) => {
    resp.send("Captain's Log")
})

// Error for undefined Routes
app.get("*", (req,resp) => {
    resp.status(404).json({Error: "Page Not found"})
})
module.exports = app