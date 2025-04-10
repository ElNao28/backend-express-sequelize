const { DataTypes } = require("sequelize");
const sequelize = require("../database/database");
const Episodes = require("./episodes.model");
const ImagesAnime = require("./images-anime.model");

const Anime = sequelize.define(
  "tbl_animes",
  {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    type: DataTypes.STRING,
    language: DataTypes.STRING,
    durationEpisodes: {
      type: DataTypes.STRING,
      field: "duration_episodes",
    },
    emitted: DataTypes.DATE,
    state: DataTypes.STRING,
    delete: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    timestamps: false,
  }
);

Anime.hasMany(Episodes, {
  foreignKey: "animeId",
  as: "episodes",
});
Episodes.belongsTo(Anime, {
  foreignKey: "animeId",
  as: "anime",
});

Anime.hasMany(ImagesAnime, {
  foreignKey: "idAnime",
  as: "Images",
});
ImagesAnime.belongsTo(Anime, {
  foreignKey: "idAnime",
  as: "Anime",
});

module.exports = Anime;
