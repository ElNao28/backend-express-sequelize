const { DataTypes } = require("sequelize");
const sequelize = require("../database/database");
const Episodes = require("./episodes.model");

const Animes = sequelize.define(
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
    //gender -> debe relacionarse con su respectiva tabla
    //studio -> debe relacionarse con su tabla
    //episodes -> debe relacionarse con su tabla
    languaje: DataTypes.STRING,
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

Animes.hasMany(Episodes, {
  foreignKey: "animeId",
});
Episodes.belongsTo(Animes);

module.exports = Animes;
