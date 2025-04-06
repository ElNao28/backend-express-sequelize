const { Router } = require("express");
const router = Router();
const {
  createNewUser,
  recoverPassword,
} = require("../controllers/users.controller");

router.post("/users", createNewUser);
router.post("/users/recover-password", recoverPassword);

module.exports = router;
