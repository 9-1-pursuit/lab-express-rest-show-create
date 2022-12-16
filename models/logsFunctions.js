const { response } = require("../app");

/* 
    -/logs?order=asc it will organize the logs alphabetically 
    - a<b -1, a>b 1, else 0
    */
function logQueries(req, queryName, dataArr) {
    const value = req.query[queryName]
    let display;

    if(queryName === "order"){
        if(value === "asc"){
           display = dataArr.sort((a,b) => a.captainName < b.captainName ? -1 : 1 || 0)
        }
        else if(value === "desc"){
            display = dataArr.sort((a,b) => a.captainName > b.captainName ? -1 : 1 || 0)
        }
    }
    return display

}


module.exports = {
    logQueries,
}
