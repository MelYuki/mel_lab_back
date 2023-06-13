const sqlConfig = require("../db/database")
const UserModel = require("../models/user.model")
const sql = require("mssql")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const UserController = {
    register: async (req, res) => {
        try {
            await sql.connect(sqlConfig)
            const { email, username, password } = req.body

            const hashedPwd = bcrypt.hashSync(password, 10)

            const result = await UserModel.register({email, username, hashedPwd})

            if(result) {
                res.send("REGISTRED").status(200)
            }
        }
        catch(err) {
            console.error(err)
            res.sendStatus(404)
        }
    },

    login: async (req, res) => {
        try {
            await sql.connect(sqlConfig)
            const { email, password } = req.body

            const userQuery = await sql.query `SELECT * FROM users WHERE email=${email}`
            // console.log(password, user.password)
            // console.log(user)
            const user = userQuery.recordset[0]

            if(!user) {
                console.log("No such user exists!")
                res.sendStatus(404)
            }

            const isValid = bcrypt.compareSync(password, user.password)
            // console.log(isValid)

            if(!isValid) {
                return res.send("Invalid Password!").status(401)
            }

            if (user && isValid) {
                res.status(200).json({user})
            }
        }
        catch(err) {
            console.log(err)
            res.sendStatus(404)
        }
    }
}

module.exports = UserController
