const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  name: String,
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profilePic: String,
  date: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
