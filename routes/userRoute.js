const router = require("express").Router();
const {
  handleGetUsers,
  handleGetUser,
  handleCreateUser,
  handleUpdateUser,
  handleDeleteUser,
} = require("../controllers/userController");

router.get("/", handleGetUsers);
router.post("/", handleCreateUser);
router.get("/:id", handleGetUser);
router.put("/:id", handleUpdateUser);
router.delete("/:id", handleDeleteUser);

module.exports = router;
