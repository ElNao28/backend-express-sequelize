const express = require("express");
const app = express();
const rutaHome = require("./routes/home.route");
const rutasMovies = require("./routes/movies.route");
const rutasUsers = require("./routes/users.route");
app.use(express.json());

app.use("/", rutaHome);
app.use("/", rutasMovies);
app.use("/",rutasUsers);

module.exports = app;
