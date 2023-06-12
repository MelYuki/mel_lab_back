const sql = require("mssql")
const sqlConfig = require("../db/database")

const UserModel = {
    getAll: async () => {
        try {
            const req = await sql.query `SELECT * FROM users`
            return req
        }
        catch(err) {
            console.error(err)
        }
    },

    register: async (data) => {
        try {
            const { email, username, hashedPwd } = data

            const req = await sql.query `INSERT INTO users (email, username, password)VALUES (${email}, ${username}, ${hashedPwd})`

            return req
        }
        catch(err) {
            console.error(err)
            res.sendStatus(404)
        }
    }
}

module.exports = UserModel