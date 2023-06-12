require("dotenv").config()

const { DB_NAME, DB_PWD, DB_USER } = process.env

const sqlConfig = {
    user: DB_USER,
    password: DB_PWD,
    database: DB_NAME,
    server: "localhost",
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 300000
    },
    options: {
        trustServerCertificate: true
    }
}

module.exports = sqlConfig