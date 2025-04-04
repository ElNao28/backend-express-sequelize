const { Router } = require("express");

const router = Router();
const { loginUser } = require("../controllers/auth.controller");

router.post("/auth", loginUser);

module.exports = router;
