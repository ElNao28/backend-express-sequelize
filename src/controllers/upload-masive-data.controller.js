const axios = require("axios");
const HandlerError = require("../helpers/handlerError.helper");
const ApiResponse = require("../helpers/reponse-api.helper");
const Gender = require("../models/gender.model");
const uploadGenders = async (req, res) => {
  try {
    const gendersApiResponse = await axios.get(
      "https://api.jikan.moe/v4/genres/anime"
    );
    const { data } = gendersApiResponse.data;
    for (const gender of data) {
      await Gender.create({ name: gender.name });
    }
    return ApiResponse(res, "Se cargaron los generos");
  } catch (error) {
    HandlerError(res, error);
  }
};

module.exports = {
  uploadGenders,
};
