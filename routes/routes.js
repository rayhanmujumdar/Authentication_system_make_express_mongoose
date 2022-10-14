const status = require("express").Router()

status.route("/signin").get((req, res) => {
  res.status(200).send({
    message: "Signin method is ok",
  });
});

module.exports = status;
