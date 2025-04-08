const { DataTypes } = require("sequelize");
const sequelize = require("../database/database");

const Episodes = sequelize.define("tbl_episodes", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
  },
  name: DataTypes.STRING,
  number: DataTypes.INTEGER,
  animeId: {
    type: DataTypes.INTEGER,
    field: "anime_id",
  },
});

module.exports = Episodes;
