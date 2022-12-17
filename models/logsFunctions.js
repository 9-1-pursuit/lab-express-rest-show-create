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
        if(queryObj.lastCrisis ==="gte20"){
            display = dataArr.filter(({daysSinceLastCrisis}) => daysSinceLastCrisis >= 20)
        }
        if(queryObj.lastCrisis ==="lte5"){
            display = dataArr.filter(({daysSinceLastCrisis}) => daysSinceLastCrisis <= 5)
        }
    }
    
    return display

}


module.exports = {
    logQueries,
}
