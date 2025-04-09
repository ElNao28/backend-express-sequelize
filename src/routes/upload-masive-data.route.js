const { Router } = require("express");
const {
  uploadGenders,
} = require("../controllers/upload-masive-data.controller");
const route = Router();

route.get("/upload-gender", uploadGenders);
module.exports = route;
