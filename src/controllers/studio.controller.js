const Studio = require("../models/studio.model");
const ResponseApi = require("../helpers/reponse-api.helper");
const HandlerError = require("../helpers/handlerError.helper");
require("../models/anime-studio.model");

const createNewStudio = async (req, res) => {
  try {
    const newStudio = await Studio.create(req.body);
    return ResponseApi(res, "Se creo exitosamen el estudio", 200, newStudio);
  } catch (error) {
    return HandlerError(res, error);
  }
};
const getAllStudios = async (req, res) => {
  try {
    const foundStudios = await Studio.findAll({
      where: {
        delete: false,
      },
      include: ["Animes"],
    });
    return ResponseApi(res, "Se obtuvieron los estudios", 200, foundStudios);
  } catch (error) {
    return HandlerError(res, error);
  }
};
const updateStudioById = async (req, res) => {
  try {
    const { id } = req.query;
    await Studio.update(req.body, {
      where: {
        id,
      },
    });
    return ResponseApi(res, "Se actualizo correctamente el estudio");
  } catch (error) {
    return HandlerError(res, error);
  }
};
const deleteStudioById = async (req, res) => {
  try {
    const { id } = req.query;
    await Studio.update(
      { delete: true },
      {
        where: {
          id,
        },
      }
    );
    return ResponseApi(res, "Se elimino exitosamente el estudio");
  } catch (error) {
    return HandlerError(res, error);
  }
};
module.exports = {
  createNewStudio,
  getAllStudios,
  updateStudioById,
  deleteStudioById,
};
