const { Router } = require("express");
const {
  createNewEpisode,
  getAllEpisodesByIdAnime,
  getEpisodeById,
  updateEpisodeById,
  deleteEpisodeById,
} = require("../controllers/episodes.controller");

const route = Router();

route.post("/episodes", createNewEpisode);
route.get("/episodes-by-anime", getAllEpisodesByIdAnime);
route.get("/episodes-by-id", getEpisodeById);
route.patch("/episodes-update-by-id", updateEpisodeById);
route.delete("/episodes-delete-by-id", deleteEpisodeById);

module.exports = route;
