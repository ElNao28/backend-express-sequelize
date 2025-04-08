const express = require("express");
const cors = require("cors");
const app = express();
const rutaHome = require("./routes/home.route");
const rutasUsers = require("./routes/users.route");
const rutasAuth = require("./routes/auth.route");
const rutasAnime = require("./routes/animes.route");
const rutasEpisodes = require("./routes/episodes.route");
const rutasGenders = require("./routes/genders.route");

app.use(
  cors({
    origin: "http://localhost:4200",
  })
);
app.use(express.json());
app.use("/", rutaHome);
app.use("/", rutasUsers);
app.use("/", rutasAuth);
app.use("/", rutasAnime);
app.use("/", rutasEpisodes);
app.use("/", rutasGenders);

module.exports = app;
