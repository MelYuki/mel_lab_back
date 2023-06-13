const sql = require("mssql")

const UserModel = {
    register: async (data) => {
        try {
            const { email, username, hashedPwd } = data

            const req = await sql.query `INSERT INTO users (email, username, password) VALUES (${email}, ${username}, ${hashedPwd})`

            return req
        }
        catch(err) {
            console.error(err)
            res.sendStatus(404)
        }
    }
}

module.exports = UserModel