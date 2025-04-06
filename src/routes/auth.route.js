const { Router } = require("express");

const router = Router();
const {
  loginUser,
  recoverPassword,
} = require("../controllers/auth.controller");

router.post("/auth", loginUser);
router.get("/recover-password", recoverPassword);

module.exports = router;
