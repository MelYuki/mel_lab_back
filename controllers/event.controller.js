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
    },

    getById: async (req, res) => {
        try {
            const { id } = req.params

            await sql.connect(sqlConfig)
            const result = await EventModel.getById({id})
            const content = result.recordset
            if(result) {
                res.status(200).json({content})
            }
            return content
        }
        catch(err) {
            console.log(err)
            res.sendStatus(404)
        }
    },

    add: async (req, res) => {
        try {
            await sql.connect(sqlConfig)
            const { name, day_in, day_out, duration, desc } = req.body

            const result = await EventModel.add({name, day_in, day_out, duration, desc})

            if(result) {
                res.send("ADD").status(200)
            }
        }
        catch(err) {
            console.error(err)
            res.sendStatus(404)
        }
    }
}

module.exports = EventController