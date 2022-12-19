const validateURL = (req, res, next) => {
  console.log("This function runs on the POST bookmark");
  next();
};

const validatePost = (req, res, next) => {
  if (
    typeof req.body.captainName !== "string" ||
    typeof req.body.title !== "string" ||
    typeof req.body.post !== "string" ||
    typeof req.body.mistakesWereMadeToday !== "boolean" ||
    typeof req.body.daysSinceLastCrisis !== "number"
  ) {
    console.log("a data type is incorrct");
    res.redirect("/*");
  } else {
    next();
  }
};

module.exports = { validateURL, validatePost };
