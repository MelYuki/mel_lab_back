const sql = require('mssql');

const EventModel = {
    getAll: async () => {
        try {
            const req = await sql.query `SELECT * FROM events`
            return req
        }
        catch(err) {
            console.error(err);
        }
    }
}

module.exports = EventModel