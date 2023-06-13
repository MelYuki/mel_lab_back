const sqlConfig = require("../db/database")
const UserModel = require("../models/user.model")
const sql = require("mssql")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const UserController = {
    getAll: async(req, res) => {
        try {
            await sql.connect(sqlConfig)
            const result = await UserModel.getAll()
            if(result) {
                console.log(result)
                res.sendStatus(200)
            }
        }
        catch(err) {
            console.error(err)
            res.status(404)
        }
    },

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
    }
}

module.exports = UserController