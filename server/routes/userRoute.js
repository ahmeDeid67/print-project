const router = require("express").Router();
const {
  getUsers,
  createUsers,
  updateUser,
  deleteUser,
  getOneUser,
} = require("../controllers/userController.js");

// get requests
router.get("/", getUsers);
router.get("/:id", getOneUser);

// post requests
router.post("/", createUsers);

// put requests
router.put("/:id", updateUser);

// delete requests
router.delete("/:id", deleteUser);

module.exports = router;
