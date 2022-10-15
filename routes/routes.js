const status = require("express").Router();
const controller = require("../controller/controller");

status.get('/signIn',controller.signInController)
status.post('/signUp',controller.signUpController)

module.exports = status;
