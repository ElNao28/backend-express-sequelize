const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const createNewUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const findUsers = await User.findAll();

    for (const user of findUsers) {
      if (user.email === email || user.username === username) {
        return res
          .status(400)
          .json({ message: "El correo o usuario ya esta registrado" });
      }
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
    });
    res.status(201).json({ message: "Registro compleado", data: newUser });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const recoverPassword = async (req, res) => {
  try {
    const { token, password } = req.body;
    const tokenDecode = jwt.decode(token);
    const { email } = tokenDecode.userData;

    const incripPassword = await bcrypt.hash(password, 10);

    await User.update(
      { password: incripPassword },
      {
        where: { email },
      }
    );

    return res.status(200).json({ message: "Contraseña actualizada" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createNewUser,
  recoverPassword,
};
