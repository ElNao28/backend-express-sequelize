const { Sequelize } = require("sequelize");

const nameBd = process.env.NAME_BD;
const userBd = process.env.USERNAME_BD;
const passwordBd = process.env.PASSWORD_BD;
const portBd = process.env.PORT_BD;
const host = process.env.HOST;

const sequelize = new Sequelize(nameBd, userBd, passwordBd, {
  host: host,
  port: portBd,
  dialect: "postgres",
});

const authenthicate = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

authenthicate();

module.exports = sequelize;
