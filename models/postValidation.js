const postValidation = (req, res, next) => {
  const {
    captainName,
    title,
    post,
    mistakesWereMadeToday,
    daysSinceLastCrisis,
  } = req.body;
  if (
    !(
      typeof captainName === "string" &&
      typeof title == "string" &&
      typeof post === "string" &&
      typeof mistakesWereMadeToday === "boolean" &&
      typeof daysSinceLastCrisis === "number"
    )
  ) {
    res.json({ Error: "Incorrect Data Types Entered" });
  } else next();
};

module.exports = { postValidation };
