
//DEPENDENCIES
const express = require('express')
const logsController = require("./controllers/logsController.js")
const morgan = require('morgan')


//CONFIGURATION
const app = express()
app.use(express.json())
app.use(morgan("tiny"))
app.use("/logs", logsController)

//ROUTES
app.get("/", (req, res) =>{
    res.send("Welcome to the Captain's Log")
})

app.get("*", (req, res) =>{
    res.status(401).json('Sorry, there is an error. ')
})


 module.exports = app