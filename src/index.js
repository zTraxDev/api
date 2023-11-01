const express = require('express');
const dotenv = require("dotenv").config()
const morgan = require("morgan")

// Config
const port = process.env.PORT ?? 4000
const app = express()


// Modules
const route = require("./routes/index")

app.use(express.json())
app.use(morgan("dev"))
app.use("/api", require("./routes"))

app.listen(port, () => {
    console.log(`Server is listen in localhost:${port}`);
})