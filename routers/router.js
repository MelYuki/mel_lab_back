const UserController = require('../controllers/user.controller');
const express = require('express');
const UserRouter = express.Router();

// UserRouter.route("/login").post(UserController.login)
UserRouter.post("/login", UserController.login)
UserRouter.post("/register", UserController.register)

module.exports = UserRouter
