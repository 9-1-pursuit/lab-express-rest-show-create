const validateURL = (req, res, next) => {
  console.log("this function runs on the POST log");
  next();
};

module.exports = { validateURL };
