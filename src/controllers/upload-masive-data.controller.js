const axios = require("axios");
const HandlerError = require("../helpers/handlerError.helper");
const ApiResponse = require("../helpers/reponse-api.helper");
const Gender = require("../models/gender.model");
const Studio = require("../models/studio.model");
const AnimeGender = require("../models/anime-gender.model");
const AnimeStudio = require("../models/anime-studio.model");
const Anime = require("../models/anime.model");
const ImagesAnime = require("../models/images-anime.model");

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
    return HandlerError(res, error);
  }
};

const uploadStudiosMasive = async (req, res) => {
  try {
    const { page } = req.query;
    const animeApiResponse = await axios.get(
      `https://api.jikan.moe/v4/anime?page=${page}`
    );
    const { data } = animeApiResponse.data;

    for (const anime of data) {
      for (const studio of anime.studios) {
        const existStudio = await Studio.findOne({
          where: {
            name: studio.name,
          },
        });
        if (!existStudio) {
          await Studio.create({
            name: studio.name,
          });
        }
      }
    }
    return ApiResponse(res, "Carga de estudios completada");
  } catch (error) {
    return HandlerError(res, error);
  }
};

const uploadAnimeMasive = async (req, res) => {
  try {
    const { page } = req.query;
    const animeApiResponse = await axios.get(
      `https://api.jikan.moe/v4/anime?page=${page}`
    );
    const { data } = animeApiResponse.data;

    for (const anime of data) {
      const newAnime = await Anime.create({
        title: anime.title,
        description: anime.synopsis,
        type: anime.type,
        language: "Japanese",
        durationEpisodes: anime.duration,
        emitted: anime.aired.from,
        state: "Finished",
      });

      await ImagesAnime.create({
        url:
          anime.images.webp.large_image_url != null
            ? anime.images.webp.large_image_url
            : "null",
        type: "front",
        idAnime: newAnime.id,
      });
      await ImagesAnime.create({
        url:
          anime.trailer.images.maximum_image_url != null
            ? anime.trailer.images.maximum_image_url
            : "null",
        type: "background",
        idAnime: newAnime.id,
      });

      for (const gender of anime.genres) {
        const foundGender = await Gender.findOne({
          where: {
            name: gender.name,
          },
        });
        if (foundGender) {
          AnimeGender.create({
            idAnime: newAnime.id,
            idGender: foundGender.id,
          });
        }
      }
      for (const studio of anime.studios) {
        const foundStudio = await Studio.findOne({
          where: {
            name: studio.name,
          },
        });
        if (foundStudio) {
          AnimeStudio.create({
            idAnime: newAnime.id,
            idStudio: foundStudio.id,
          });
        }
      }
    }
    return ApiResponse(res, "Carga de animes chido");
  } catch (error) {
    return HandlerError(res, error);
  }
};

module.exports = {
  uploadGenders,
  uploadAnimeMasive,
  uploadStudiosMasive,
};
