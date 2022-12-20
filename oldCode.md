
//****  BONUSES - PART 1*****   Note - currently works in replit, not via res.json()
//replit link = https://replit.com/@LadyDStukes/CommonGruesomeFlashdrive#index.js

//QUERY ROUTES

//bonus#1 -     /logs?order=asc it will organize the logs alphabetically
//works in replit but not Postman - don't know why yet
// logs.get("/logs?order=asc", (req, res) => {
//     const sortedLogs = logsData.sort(
//         (a,b) =>
//         (a.captainName.toLowerCase() < b.captainName.toLowerCase()) ? -1 
//         :(a.captainName.toLowerCase() > b.captainName.toLowerCase()) ? 1 
//         : 0
//     )
//     //console.log("List of logs, sorted in ascending order = ", sortedLogs)
//     res.json(sortedLogs)
    
// })

//bonus#2      /logs?order=desc it will organize the logs in reverse alphabetical order
//This works in replit, not Postman
// logs.get("/logs?order=desc", (req, res) => {
// const sortedLogs2 = logsData.sort(
//     (a,b) => 
//     (a.captainName.toLowerCase() < b.captainName.toLowerCase()) ? 1 
//     : (a.captainName.toLowerCase() > b.captainName.toLowerCase()) ? -1 
//     : 0
//     )
//     //console.log("List of logs, sorted in descending order = ", sortedLogs2)
//     res.json(sortedLogs2)
// })

//bonus#3      /logs?mistakes=true it will only show the logs where the value of mistakesWereMadeToday is true
//This works in Postman and replit
// logs.get("/logs?mistakes=true", (req, res) => {
//     const logMistakes = logsData.filter(log => log.mistakesWereMadeToday === true)
//     res.json(logMistakes)
//    // console.log(logMistakes)
//     })

//bonus#4     /logs?mistakes=false it will only show the logs where the value of mistakesWereMadeToday is false
//This works in Postman and replit - must change value of at least one matching object key to false
// logs.get("/logs?mistakes=false", (req, res) => {
//     const logNoMistakes = logsData.filter(log => log.mistakesWereMadeToday === false)
//     res.json(logNoMistakes)
//    // console.log(logNoMistakes)
//     })


 //bonus#5     /logs?lastCrisis=gt10 it will return all the logs where the daysSinceLastCrisisis greater than 10   
//This works in replit, not in Postman 
// logs.get("/logs?lastCrisis=gt10", (req, res) => {
//     const crisisCount10 = logsData.filter(log => log.daysSinceLastCrisis > 10)
//     res.json(crisisCount10)
//    // console.log(crisisCount10)
//     })
//bounus#6   /logs?lastCrisis=gte20it will return all the logs where the daysSinceLastCrisisis greater tthan or equal to 20 
//This works in replit, not in Postman 
// logs.get("/logs?lastCrisis=gt20", (req, res) => {
//     const crisisCount20 = logsData.filter(log => log.daysSinceLastCrisis >= 20)
//     res.json(crisisCount20)
//    // console.log(crisisCount20)
//     })
//bonus#7   /logs?lastCrisis=lte5it will return all the logs where the daysSinceLastCrisisis less tthan or equal to 5
//This works in replit, not in Postman 
// logs.get("/logs?lastCrisis=lte5", (req, res) => {
//     const crisisCount5 = logsData.filter(log => log.daysSinceLastCrisis <= 5)
//     res.json(crisisCount5)
//     // console.log(crisisCount5)
//     })

//***** Bonuses  - PART 2  *****
