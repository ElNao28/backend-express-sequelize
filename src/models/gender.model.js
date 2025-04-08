const { DataTypes } = require("sequelize");
const sequelize = require("../database/database");

const Gender = sequelize.define(
  "tbl_gender",
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
  }
);

module.exports = Gender;
