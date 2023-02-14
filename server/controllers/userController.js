const User = require("../models/usersModel");
const bcrypt = require("bcrypt");

// Get All Users
module.exports.getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    if (!users) {
      res.status(300).json({ msg: "There is no users", status: false });
    }
    res
      .status(200)
      .json({ status: "success", length: users.length, data: users });
  } catch (err) {
    res.status(500).json({ status: "Fail", data: err.message });
  }
};

// Get User
module.exports.getOneUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      res
        .status(404)
        .json({ status: "Fail", msg: "There is no user with this id" });
    }
    res.status(200).json({ status: "success", data: user });
  } catch (e) {
    res.status(500).json({ status: "Fail", data: err.message });
  }
};

// Create new User
module.exports.createUsers = async (req, res) => {
  try {
    const {
      firstName,
      familyName,
      email,
      password,
      userCountry,
      phoneNumber,
      gender,
    } = req.body;
    const checkEmail = await User.findOne({ email }); // Check if there is user with the same email
    const hashPassword = await bcrypt.hash(password, 10);
    if (checkEmail) {
      res.status(300).json({ msg: "Email already used", status: false });
    }
    const newUser = await User.create({
      firstName,
      familyName,
      email,
      password: hashPassword,
      userCountry,
      phoneNumber,
      gender,
    });

    await newUser.save();
    delete newUser.password;
    res.status(200).json({ status: "success", data: newUser });
  } catch (err) {
    res.status(500).json({ status: "Fail", data: err.message });
  }
};

// Update User
module.exports.updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate({ _id: req.params.id }, req.body);

    if (!user) {
      res
        .status(404)
        .json({ msg: "There is no user with this id", status: false });
    }
    delete user.password;
    res.status(200).json({ msg: "User Updated", data: user });
  } catch (err) {
    res.status(404).json({ msg: err.message, status: false });
  }
};

// Delete User
module.exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete({ _id: req.params.id });
    if (!user) {
      return res
        .status(404)
        .json({ msg: "There is no user with this id", status: false });
    }
    return res.status(202).json({ msg: "User deleted", data: user });
  } catch (err) {
    return res.status(404).json({ msg: err.message, status: false });
  }
};
