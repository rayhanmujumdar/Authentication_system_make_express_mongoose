const status = require("express").Router();
const controller = require("../controller/controller");

status.get('/signIn',controller.signInController)
status.get('/signIn',controller.signUpController)

module.exports = status;
