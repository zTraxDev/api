const { Router } = require("express")
const fs = require("fs")
const route = Router()

const path = __dirname;


const fileExtension = (file) => {
    return file.split(".").shift()
}


fs.readdirSync(path, "utf-8").filter((files) => {
    const name = fileExtension(files)

    if(name !== "index"){
        route.use(`/${name}`, require(`./${files}`))
        console.log(`[Rutas] Path ${name} Loaded!`);
    }
})

module.exports = route