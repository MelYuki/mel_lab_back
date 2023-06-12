const express = require("express")
const app = express()
// require("dotenv").config()
const { PORT } = process.env
const path = require("path")

app.use(express.json())
app.use(express.urlencoded({extended:true}))



app.listen(PORT, () => {
    console.log(`SUCCESS, server is running on port: ${PORT}`)
})