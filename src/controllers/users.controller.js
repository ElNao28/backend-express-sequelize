const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const createNewUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const findUsers = await User.findAll();

    for (const user of findUsers) {
      if (user.email === email || user.username === username) {
        return res
          .status(400)
          .json({ message: "Username or Email already exists" });
      }
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
    });
    res
      .status(201)
      .json({ message: "User created successfully", data: newUser });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createNewUser,
};
