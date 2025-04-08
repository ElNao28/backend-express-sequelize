const { DataTypes } = require("sequelize");
const sequelize = require("../database/database");
const Animes = require("../models/anime.model");
const Studio = require("../models/studio.model");

const AnimeStudio = sequelize.define(
  "tbl_anime_studio",
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
    idStudio: {
      type: DataTypes.INTEGER,
      field: "id_studio",
    },
  },
  {
    timestamps: false,
    tableName: "tbl_anime_studio",
  }
);

Animes.belongsToMany(Studio, {
  through: AnimeStudio,
  foreignKey: "idAnime",
  as: "Studios",
});
Studio.belongsToMany(Animes, {
  through: AnimeStudio,
  foreignKey: "idStudio",
  as: "Animes",
});

module.exports = AnimeStudio;
