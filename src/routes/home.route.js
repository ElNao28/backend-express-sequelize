const { Router } = require("express");
const { helloWord, setValueToMessage } = require("../controllers/home");

const router = Router();

router.get("/", helloWord);
router.post("/message", setValueToMessage);

module.exports = router;
