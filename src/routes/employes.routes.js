const expres = require("express")
const employesRoute = expres.Router()


employesRoute.get("/", (req, res) => {
    res.send("Hola")
})

module.exports = employesRoute