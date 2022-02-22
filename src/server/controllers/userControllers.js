const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../../database/models/User");

const loginUser = async (req, res, next) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });

  if (!user) {
    const error = new Error("User not Found");
    error.code = 401;
    next(error);
  }
  const isRigthPassword = await bcrypt.compare(password, user.password);

  if (!isRigthPassword) {
    const error = new Error("Incorrect password");
    error.code = 401;
    next(error);
  }
  const userData = {
    name: user.name,
    id: user.id,
  };
  const token = jwt.sign(userData, process.env.JWT_SECRET, { expiresIn: "7d" });
  return res.json({ token });
};

module.exports = loginUser;
