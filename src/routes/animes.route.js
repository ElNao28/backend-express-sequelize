const { Router } = require("express");
const {
  createNewAnime,
  getAllAnimes,
  getAnimeById,
  updateAnimeById,
  deleteAnimeByiId,
} = require("../controllers/animes.controller");
const route = Router();

route.post("/animes", createNewAnime);
route.get("/animes", getAllAnimes);
route.get("/animes/by-id", getAnimeById);
route.patch("/animes/update-id", updateAnimeById);
route.delete("/animes/delete-id", deleteAnimeByiId);

module.exports = route;
