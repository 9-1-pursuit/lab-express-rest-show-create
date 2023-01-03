const validateURL = (req, res, next) => {
    // console.log("This function runs on the POST  Log");
    next();
  };
  
  module.exports = { validateURL };