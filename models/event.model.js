const sql = require('mssql');

const EventModel = {
    getAll: async () => {
        try {
            const req = await sql.query `SELECT * FROM events`
            return req
        }
        catch(err) {
            console.error(err)
            res.sendStatus(404)
        }
    },

    getById: async (data) => {
        try {
            const { id } = data
            const req = await sql.query `SELECT * FROM events WHERE id=${id}`
            return req
        }
        catch(err) {
            console.error(err)
            res.sendStatus(404)
        }
    },

    add: async (data) => {
        try {
            const { name, day_in, day_out, duration, desc } = data

            const req = await sql.query `INSERT INTO events
                (event_name, date_in, date_out, duration, description)
                VALUES
                (${name}, ${day_in}, ${day_out}, ${duration}, ${desc})`

            return req
        }
        catch(err) {
            console.error(err)
            res.sendStatus(404)
        }
    }
}

module.exports = EventModel