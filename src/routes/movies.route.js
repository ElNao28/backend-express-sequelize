const { Router } = require("express");
const { createMovie } = require("../controllers/movies.controller");
const router = Router();

router.post("/movies", createMovie);

module.exports = router;
