function logQueries(queryObj, dataArr) {
    let display;
   
    if(queryObj.order){
        if(queryObj.order === "asc"){
           display = dataArr.sort((a,b) => a.captainName < b.captainName ? -1 : 1 || 0)
        }
        else if(queryObj.order === "desc"){
            display = dataArr.sort((a,b) => a.captainName > b.captainName ? -1 : 1 || 0)
        }
    }
    if(queryObj.mistakes){
        if(queryObj.mistakes === "true"){
            display = dataArr.filter(({mistakesWereMadeToday}) => mistakesWereMadeToday === true)
        }
        else if(queryObj.mistakes === "false"){
            display = dataArr.filter(({mistakesWereMadeToday}) => mistakesWereMadeToday === false)
        } 
    }
    if(queryObj.lastCrisis){
        if(queryObj.lastCrisis ==="gt10"){
            display = dataArr.filter(({daysSinceLastCrisis}) => daysSinceLastCrisis > 10)
        }
        else if(queryObj.lastCrisis ==="gte20"){
            display = dataArr.filter(({daysSinceLastCrisis}) => daysSinceLastCrisis >= 20)
        }
        else if(queryObj.lastCrisis ==="lte5"){
            display = dataArr.filter(({daysSinceLastCrisis}) => daysSinceLastCrisis <= 5)
        }
    }
    return display
}

// /logs POST validation function
const validatePost = (req, resp, next) => {
    const captain = req.body.captainName
    const title = req.body.title
    const post = req.body.post
    const mistakes = req.body.mistakesWereMadeToday
    const crisis = req.body.daysSinceLastCrisis
  
    if(!captain || !title || !post || mistakes === undefined || !crisis){
        next("err")
    }
    else if(typeof captain !== "string" || typeof title !== "string" || typeof post !== "string" || typeof mistakes !== "boolean" || typeof crisis !== "number"){
        next("err")
    }
    else{
        next()
    }
}

module.exports = {
    logQueries,
    validatePost,
}
