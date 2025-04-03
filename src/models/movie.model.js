const { Sequelize } = require("sequelize");
const sequelize = require("../database/database");

const Movie = sequelize.define("tbl_movie", {
  id: {
    type: Sequelize.STRING,
    primaryKey: true,
    allowNull: false,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: Sequelize.TEXT,
  release_date: Sequelize.DATE,
});

module.exports = Movie;
