const Episodes = require("../models/episodes.model");

const createNewEpisode = async (req, res) => {
  try {
    const newEpisode = await Episodes.create(req.body);

    return res.status(200).json({
      message: "Episodio creado exitosamente",
      data: newEpisode,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error.message,
    });
  }
};

const getAllEpisodesByIdAnime = async (req, res) => {
  try {
    const { idAnime } = req.query;
    const foundEpisodes = await Episodes.findAll({
      where: {
        animeId: idAnime,
        delete: false,
      },
    });
    return res.status(200).json({
      message: "Se encontraron los episodios",
      data: foundEpisodes,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error.message,
    });
  }
};

const getEpisodeById = async (req, res) => {
  try {
    const { id } = req.query;
    const foundEpisode = await Episodes.findOne({
      where: {
        id,
        delete: false,
      },
      include: ["anime"],
    });
    if (!foundEpisode)
      return res.status(404).json({
        message: "Episodio no encontrado",
      });
    return res.status(200).json({
      message: "Episodio encontrado",
      data: foundEpisode,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const updateEpisodeById = async (req, res) => {
  try {
    const { id } = req.query;
    const updEpisode = await Episodes.update(req.body, {
      where: {
        id,
      },
    });
    return res.status(200).json({
      message: "Se Actualizo el episodio",
      data: updEpisode,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const deleteEpisodeById = async (req, res) => {
  try {
    const { id } = req.query;
    const delEpisode = await Episodes.update(
      { delete: true },
      {
        where: {
          id,
        },
      }
    );
    return res.status(200).json({
      message: "Se elimino exitasamente el anime",
      data: delEpisode,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
module.exports = {
  createNewEpisode,
  getAllEpisodesByIdAnime,
  updateEpisodeById,
  deleteEpisodeById,
  getEpisodeById,
};
