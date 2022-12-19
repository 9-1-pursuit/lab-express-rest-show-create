const express = require ('express')
const log = express.Router()
const { validateURL } = require('../models/validations');
const logsArray = require('../models/log')



log.use((req, res, next) => {
  console.log("This middleware runs for EVERY log route");
  next();
});

// ALL
log.get('/',(req,res)=>{
    res.json(logsArray)
})

// ONE
log.get("/:index", (req, res) => {
    const { index } = req.params;
    if (logsArray[index]) {
      res.status(200).json(logsArray[index]);
    } else {
      res.status(404).json({ error: "Not Found" });
    }
  });

log.post("/",validateURL, (req, res) => {
  logsArray.push(req.body);
    res.json(logsArray.at(-1));
  });
  
log.delete('/:index', (req, res)=>{
  const deletedlog = logsArray.splice(req.params.index, 1)
  res.status(200).json(deletedlog)
})


log.put('/:index',(req,res)=>{
  if (logsArray[req.params.index]){
    logsArray[req.params.index]= req.body
    res.status(200).json(logsArray[req.params.index])
  } else {
    res.status(404).json({error:'Not Found'})
  }
})




module.exports = log