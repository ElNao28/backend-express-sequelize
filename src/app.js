const express = require("express");
const cors = require("cors");
const app = express();
const rutaHome = require("./routes/home.route");
const rutasMovies = require("./routes/movies.route");
const rutasUsers = require("./routes/users.route");
const rutasAuth = require("./routes/auth.route");
app.use(cors({
    origin: "http://localhost:4200",
}));
app.use(express.json());
app.use("/", rutaHome);
app.use("/", rutasMovies);
app.use("/", rutasUsers);
app.use("/", rutasAuth);

module.exports = app;
