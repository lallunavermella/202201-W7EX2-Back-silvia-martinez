const { model, Schema } = require("mongoose");

const userSchema = new Schema({
  name: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = model("User", userSchema, "users");

module.exports = User;
