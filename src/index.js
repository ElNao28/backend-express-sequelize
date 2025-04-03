require("dotenv").config();
const sequelize = require("./database/database")
const app = require("./app");
const port = process.env.PORT ? process.env.PORT : 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
