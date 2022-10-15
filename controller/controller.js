const bcrypt = require("bcrypt");
const UserAuth = require("../models/userModels");
exports.signUpController = async (req, res) => {
  try {
    const { username, email, password, age, married } = req.body;
    const saltRounds = 10;
    const passHash = await bcrypt.hash(password, saltRounds);
    const user = new UserAuth({
      username,
      email,
      age,
      married,
      password: passHash,
    });
    const result = await user.save();
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.signInController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const findUser = await UserAuth.findOne({ email });
    if (findUser) {
      const matchPass = await bcrypt.compare(password, findUser?.password);
      if (matchPass) {
        res.status(200).json({
          success: true,
          user: findUser,
        });
      } else {
        res.status(200).json({
          success: false,
          message: "password not matching",
        });
      }
    } else {
      res.status(200).json({
        success: false,
        message: "email not found",
      });
    }
  } catch (err) {
    res.status(400).json(err);
  }
};
