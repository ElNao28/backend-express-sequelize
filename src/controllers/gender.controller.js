const Gender = require("../models/gender.model");
const ResponseApi = require("../helpers/reponse-api.helper");
const HandlerError = require("../helpers/handlerError.helper");
require("../models/anime-gender.model");

const createNewGender = async (req, res) => {
  try {
    const newGender = await Gender.create(req.body);
    return ResponseApi(res, "Se creo exitosamen el genero", 200, newGender);
  } catch (error) {
    return HandlerError(res, error);
  }
};
const getAllGenders = async (req, res) => {
  try {
    const foundGenders = await Gender.findAll({
      where: {
        delete: false,
      },
      include: ["Animes"],
    });
    return ResponseApi(res, "Se obtuvieron los generos", 200, foundGenders);
  } catch (error) {
    return HandlerError(res, error);
  }
};
const updateGenderById = async (req, res) => {
  try {
    const { id } = req.query;
    await Gender.update(req.body, {
      where: {
        id,
      },
    });
    return ResponseApi(res, "Se actualizo correctamente el genero");
  } catch (error) {
    return HandlerError(res, error);
  }
};
const deleteGenderById = async (req, res) => {
  try {
    const { id } = req.query;
    await Gender.update(
      { delete: true },
      {
        where: {
          id,
        },
      }
    );
    return ResponseApi(res, "Se elimino exitosamente el genero");
  } catch (error) {
    return HandlerError(res, error);
  }
};
module.exports = {
  createNewGender,
  getAllGenders,
  updateGenderById,
  deleteGenderById,
};
