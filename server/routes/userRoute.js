const router = require("express").Router();
const {
  getUsers,
  createUsers,
  updateUser,
  deleteUser,
  getOneUser,
} = require("../controllers/userController.js");

const { login } = require("../controllers/loginController");

// get requests
router.get("/", getUsers);
router.get("/:id", getOneUser);

// post requests
router.post("/register", createUsers);
router.post("/login", login);

// put requests
router.put("/:id", updateUser);

// delete requests
router.delete("/:id", deleteUser);

module.exports = router;
