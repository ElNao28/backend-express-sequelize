const Anime = require("../models/anime.model");

const createNewAnime = async (req, res) => {
  try {
    const newAnime = await Anime.create(req.body);

    return res.status(200).json({
      message: "Se creo exitosamente el anime",
      data: newAnime,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error.message,
    });
  }
};

const getAllAnimes = async (req, res) => {
  try {
    const foundAnime = await Anime.findAll({
      where: {
        delete: false,
      },
      include: ["Genders"],
    });
    return res.status(200).json({
      message: "Se encontro data",
      data: foundAnime,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error.message,
    });
  }
};

const getAnimeById = async (req, res) => {
  try {
    const { id } = req.query;
    const foundAnime = await Anime.findOne({
      where: {
        id,
        delete: false,
      },
      include: ["episodes", "Genders"],
    });
    if (!foundAnime)
      return res.status(404).json({
        message: "No se encontro el anime",
      });
    return res.status(200).json({
      message: "Se encontro el anime",
      data: foundAnime,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const updateAnimeById = async (req, res) => {
  try {
    const { id } = req.query;
    const updateAnime = await Anime.update(req.body, {
      where: {
        id,
        delete: false,
      },
    });
    return res.status(200).json({
      message: "Anime actualizado",
      data: updateAnime,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error.message,
    });
  }
};

const deleteAnimeByiId = async (req, res) => {
  try {
    const { id } = req.query;
    const updStatusAnime = await Anime.update(
      {
        delete: true,
      },
      {
        where: {
          id,
        },
      }
    );
    return res.status(200).json({
      message: "Se a eliminado el anime",
      data: updStatusAnime,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
module.exports = {
  createNewAnime,
  getAllAnimes,
  getAnimeById,
  updateAnimeById,
  deleteAnimeByiId,
};
