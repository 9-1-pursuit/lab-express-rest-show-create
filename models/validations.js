const logsArray= require("../models/log")
const validateURL =(req, res, next)=>{
console.log("This function checks the validity of the URL entered by the user")
const validate = logsArray.find((log)=>{
    if(typeof log.captainName ==="string" && typeof log.title === "string" && typeof post === "string" && log.mistakesWereMadeToday === "boolean" && log.daysSinceLastCrisis === "number"){ 
      //  validate.push(req.body)
      // if(validate){res.status(400).json({msg: `INVALID`})}
       console.log(validate)
    }
  })
next()
}
module.exports = {validateURL}