//! this is an example of creating our own middleware
const validateURL = (req, res, next) => {
  console.log('this function runs on the POST log');
  next();
};

module.exports = { validateURL };
