//POST endpoint for /logs //
const validateURL = (req, res, next) => {
  console.log("This function checks the validity of the url by the user");
  next();
};
// EXPORT//
module.exports = { validateURL };
