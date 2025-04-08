const { Router } = require("express");
const {
  createNewStudio,
  getAllStudios,
  updateStudioById,
  deleteStudioById,
} = require("../controllers/studio.controller");

const route = Router();

route.post("/studio-create", createNewStudio);
route.get("/studio", getAllStudios);
route.patch("/studio-update", updateStudioById);
route.delete("/studio-delete", deleteStudioById);

module.exports = route;
