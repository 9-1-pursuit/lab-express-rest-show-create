const validateData = (req, res, next) => {
    if (
        typeof req.body.captainName === "string" &&
        typeof req.body.title === "string" &&
        typeof req.body.post === "string" &&
        typeof req.body.mistakesWereMadeToday === "boolean" &&
        typeof req.body.daysSinceLastCrisis === "number"
    ){
        next()
    } else {
        res.send("Incorrect data")
    }
}

module.exports = { validateData }