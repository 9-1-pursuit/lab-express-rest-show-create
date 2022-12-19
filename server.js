const app = require("./app")

require("dotenv").config()
const PORT = process.env.PORT || 3003

app.listen(PORT, (req, res) => {
  console.log(`Listening on PORT ${PORT}`)
})
