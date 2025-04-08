const { DataTypes } = require("sequelize");
const sequelize = require("../database/database");
const Anime = require("../models/anime.model");
const Gender = require("../models/gender.model");

const AnimeGender = sequelize.define(
  "tbl_anime_gender",
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    idAnime: {
      type: DataTypes.INTEGER,
      field: "id_anime",
    },
    idGender: {
      type: DataTypes.INTEGER,
      field: "id_gender",
    },
  },
  {
    tableName: "tbl_anime_gender",
    timestamps: false,
  }
);

Anime.belongsToMany(Gender, {
  through: AnimeGender,
  foreignKey: "idAnime",
  as:'Genders'
});
Gender.belongsToMany(Anime, {
  through: AnimeGender,
  foreignKey: "idGender",
  as:'Animes'
});

module.exports = AnimeGender;