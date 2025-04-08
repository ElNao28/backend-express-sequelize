const { DataTypes } = require("sequelize");
const sequelize = require("../database/database");
const Anime = require("../models/anime.model");
const Gender = require("../models/gender.model");

const AnimeGender = sequelize.define("tbl_anime_gender", {
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
});

Anime.belongsToMany(Gender, { through: AnimeGender });
Gender.belongsToMany(Anime, { through: AnimeGender });
AnimeGender.belongsTo(Gender, {
  foreignKey: "id_gender",
});
AnimeGender.belongsTo(Anime, {
  foreignKey: "id_anime",
});
Anime.hasMany(AnimeGender, {
  foreignKey: "id_anime",
});
Gender.hasMany(AnimeGender, {
  foreignKey: "id_gender",
});
