const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const trasporter = require("../helpers/transporter.helper");
const User = require("../models/user.model");

const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ where: { username } });
    if (!user) {
      return res.status(404).json({ message: "El Usuario no existe" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Contraseña incorrecta" });
    }
    const token = jwt.sign({ user }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.status(200).json({ message: "Bienvenido", token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const sendEmailToRecoverPassword = async (req, res) => {
  const { email } = req.query;
  try {
    const userFound = await User.findOne({
      where: { email },
    });
    if (!userFound)
      return res
        .status(404)
        .json({ message: "El correo no se encuentra registrado" });

    const { password, ...userData } = userFound.dataValues;
    const token = jwt.sign({ userData }, process.env.JWT_SECRET, {
      expiresIn: "10m",
    });
    await trasporter.sendMail({
      from: process.env.EMAIL_SENDER,
      to: email,
      subject: "Recuperar contraseña",
      text: `Hola! Para recuperar tu contraseña, haz click en el siguiente enlace: ${process.env.APP_URL}public/restore-password/${token}`,
    });
    res
      .status(200)
      .json({ message: "Se a enviado un correo con instrucciones" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const verifyToken = (req, res) => {
  const { token } = req.body;
  console.log(token);
  jwt.verify(token, process.env.JWT_SECRET, function (err, decoded) {
    if (err) return res.status(403).json({ message: "Token invalido" });
    res.status(200).json({ message: "Token valido" });
  });
};

module.exports = { loginUser, sendEmailToRecoverPassword, verifyToken };
