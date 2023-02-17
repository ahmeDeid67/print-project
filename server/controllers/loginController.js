const User = require("../models/usersModel");
const bcrypt = require("bcrypt");

module.exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      const hashPassword = bcrypt.compare(password, user.password);
      if (hashPassword) {
        res.status(200).json({ status: "success", data: user });
      } else {
        res.status(404).json({ status: "fail" });
      }
    } else {
      res.status(400).json({ error: "User doesn't exist" });
    }
  } catch (err) {
    res.status(500).json({ message: "fail", msg: err.message });
  }
};
