const { Router } = require("express");
const {
  uploadGenders,
  uploadAnimeMasive,
  uploadStudiosMasive,
} = require("../controllers/upload-masive-data.controller");
const route = Router();

route.get("/upload-gender", uploadGenders);
route.get("/upload-animes", uploadAnimeMasive);
route.get("/upload-studios", uploadStudiosMasive);
module.exports = route;
