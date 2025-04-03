const { Sequelize } = require("sequelize");
const sequelize = require("../database/database");

const Movie = sequelize.define(
  "tbl_movies",
  {
    id: {
      type: Sequelize.STRING,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: Sequelize.TEXT,
  },
  {
    timestamps: false,
  }
);

module.exports = Movie;
