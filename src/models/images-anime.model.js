const { DataTypes } = require("sequelize");
const sequelize = require("../database/database");

const ImagesAnime = sequelize.define(
  "tbl_images_anime",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    url: DataTypes.STRING,
    type: DataTypes.STRING,
    idAnime: {
      type: DataTypes.STRING,
      field: "id_anime",
    },
  },
  {
    timestamps: false,
    tableName: "tbl_images_anime",
  }
);

module.exports = ImagesAnime;
