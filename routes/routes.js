const Person = require("../models/test");
const status = require("express").Router();

status.route("/signin").get((req, res) => {
  res.status(200).send({
    message: "Signin method is ok",
  });
});

status.post("/person", async(req, res) => {
  const { firstName, lastName, age, single } = req.body;
  const person = new Person({
    firstName,
    lastName,
    age,
    single,
  });
  const result = await person.save()
  console.log(result)
  res.json(result)
});

module.exports = status;
