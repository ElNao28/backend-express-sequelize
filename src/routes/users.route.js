const { Router } = require("express");
const router = Router();
const { createNewUser } = require("../controllers/users.controller");

router.post("/users", createNewUser);

module.exports = router;
