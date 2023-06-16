const sqlConfig = require("../db/database")
const sql = require("mssql")
const EventModel = require("../models/event.model")

const EventController = {

    getAll: async (req, res) => {
        try {
            await sql.connect(sqlConfig)
            const result = await EventModel.getAll()
            const content = result.recordset

            if(result) {
                // console.log(content)
                res.status(200).json({content})
            }
            return content
        }
        catch(err) {
            console.log(err)
            res.sendStatus(404)
        }
    }
}

module.exports = EventController