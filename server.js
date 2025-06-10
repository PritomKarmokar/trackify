const express = require("express")
const dotenv = require("dotenv")
const connectDB = require("./config/db")
const loggerMiddleware = require("./middlewares/loggerMiddleware")
const logger = require("./utils/logger");

dotenv.config()

const app = express()

app.use(express.json())
app.use(loggerMiddleware)

connectDB()

app.get("/", (req, res) =>{
    res.json({message: "Welcome to trackify API"})
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () =>{
    logger.info(`Server running on port: ${PORT}`)
})