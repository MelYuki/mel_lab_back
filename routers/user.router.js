const UserController = require('../controllers/user.controller');
const express = require('express');
const UserRouter = express.Router();

UserRouter.get("/", UserController.getAll)
UserRouter.route("/register").post(UserController.register)

module.exports = UserRouter