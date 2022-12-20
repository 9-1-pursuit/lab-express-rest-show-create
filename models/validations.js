const validateURL = (req, res, next) => {
  console.log("Page not found");
  next();
};

module.exports = { validateURL };
