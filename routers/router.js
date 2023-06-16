const EventController = require('../controllers/event.controller');
const UserController = require('../controllers/user.controller');
const express = require('express');
const UserRouter = express.Router();

// UserRouter.route("/login").post(UserController.login)
UserRouter.post("/login", UserController.login)
UserRouter.post("/register", UserController.register)

UserRouter.get("/list", EventController.getAll)

module.exports = UserRouter
