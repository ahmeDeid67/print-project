const router = require("express").Router();
const {
  getUsers,
  createUsers,
  updateUser,
  deleteUser,
  getOneUser,
} = require("../controllers/userController.js");

const { login } = require("../controllers/loginController");

const verifyToken = require("../middleware/auth");

// get requests
router.get("/", verifyToken, getUsers);
router.get("/:id", verifyToken, getOneUser);

// post requests
router.post("/register", verifyToken, createUsers);
router.post("/login", verifyToken, login);

// put requests
router.put("/:id", verifyToken, updateUser);

// delete requests
router.delete("/:id", verifyToken, deleteUser);

module.exports = router;
