//DEPENDENCIES
const express = require("express")
const logsController = require("./controllers/logsController")

//CONFIGURATION
const app = express()
app.use(express.json());
app.use("/logs", logsController)

//ROUTES
app.get("/", (req, res) => {
    res.send("Welcome to the captain's log")
})

app.get("/error", (req, res) => {
    res.send("No page found")
})

//EXPORT
module.exports = app