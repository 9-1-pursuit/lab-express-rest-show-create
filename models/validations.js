const validateURL = (req, res, next) =>{
    console.log("This function runs on the POST bookmark")
    next()
}

module.exports = {validateURL}