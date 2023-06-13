const express = require("express")
const app = express()
require("dotenv").config()
const { PORT } = process.env
const UserRouter = require("./routers/router")

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(UserRouter)

app.listen(PORT, () => {
    console.log(`SUCCESS, server is running on port: ${PORT}`)
})