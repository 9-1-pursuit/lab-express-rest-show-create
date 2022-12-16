const express = require("express")
const app = express()
app.use(express.json())

app.use("/logs", require("./controllers/logs.js"))


// Routes for Home
app.get("/", (req, resp) => {
    resp.send("Captain's Log")
})

// Error for undefined Routes
app.get("*", (req,resp) => {
    resp.status(404).json({error: "Page not found"})
})
module.exports = app