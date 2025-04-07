const express = require("express");
const cors = require("cors");
const app = express();
const rutaHome = require("./routes/home.route");
const rutasUsers = require("./routes/users.route");
const rutasAuth = require("./routes/auth.route");
app.use(cors({
    origin: "http://localhost:4200",
}));
app.use(express.json());
app.use("/", rutaHome);
app.use("/", rutasUsers);
app.use("/", rutasAuth);

module.exports = app;
