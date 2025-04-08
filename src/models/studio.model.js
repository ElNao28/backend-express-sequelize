const { DataTypes } = require("sequelize");
const sequelize = require("../database/database");
const Studio = sequelize.define(
  "tbl_studio",
  {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    delete: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    timestamps: false,
    tableName:'tbl_studio'
  }
);

module.exports = Studio;
