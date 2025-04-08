const { Router } = require("express");

const router = Router();
const {
  loginUser,
  sendEmailToRecoverPassword,
  verifyToken
} = require("../controllers/auth.controller");

router.post("/auth", loginUser);
router.get("/send-email", sendEmailToRecoverPassword);
router.post("/verify-token", verifyToken);

module.exports = router;
