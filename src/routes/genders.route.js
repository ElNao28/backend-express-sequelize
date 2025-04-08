const { Router } = require("express");
const {
  createNewGender,
  getAllGenders,
  updateGenderById,
  deleteGenderById,
} = require("../controllers/gender.controller");

const route = Router();

route.post("/genders-create", createNewGender);
route.get("/genders", getAllGenders);
route.patch("/genders-update", updateGenderById);
route.delete("/genders-delete", deleteGenderById);

module.exports = route;
