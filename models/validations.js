const validateURL = (req, res, next) => {
  console.log(
    "This function checks the validity of the URL entered by the user"
  );
  next();
};

const validateCaptainName = (obj) => {
  return typeof Object.values(obj);
};

module.exports = { validateURL, validateCaptainName };
