const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  isAdmin: { type: Boolean, default: false },
});

// Compare password method for regular users
userSchema.methods.compareUserPassword = function(password) {
  return bcrypt.compare(password, this.password);
};

// Compare password method for admins
userSchema.methods.compareAdminPassword = function(password) {
  return bcrypt.compare(password, this.password);
};
const User = mongoose.model('User', userSchema);

module.exports = User;

