const validateURL = (req, res, next) => {
  if (req.body.captainName === "" &&
   req.body.title === "" &&
   req.body.post === "" &&
   req.body.mistakesWereMadeToday === true || 
   req.body.mistakesWereMadeToday === false &&
   req.body.daysSinceLastCrisis === Number){
    return ('Data does not match')
   }

    next();
  };
  
  module.exports = { validateURL };
  