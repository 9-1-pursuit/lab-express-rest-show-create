
/* 
    -/logs?order=asc it will organize the logs alphabetically 
    /logs?order=desc it will organize the logs in reverse alphabetical order
    - SORT:  a<b -1, a>b 1, else 0
    - /logs?mistakes=true it will only show the logs where the value of mistakesWereMadeToday is true
    - /logs?mistakes=false it will only show the logs where the value of mistakesWereMadeToday is false
    */
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
    
    return display

}


module.exports = {
    logQueries,
}
