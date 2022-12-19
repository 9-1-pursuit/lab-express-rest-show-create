//! this is an example of creating our own middleware
const validateURL = (req, res, next) => {
  console.log('this function runs on the POST log');
  next();
};
//! 2nd bonus attempted
const validateObject = (obj) => {
  return Object.values(obj);
};
module.exports = { validateURL, validateObject };
