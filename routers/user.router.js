const UserController = require('../controllers/user.controller');
const express = require('express');
const UserRouter = express.Router();

UserRouter.get("/", UserController.getAll)
UserRouter.post("/register", UserController.register)

module.exports = UserRouter