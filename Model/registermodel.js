const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  mobile: String,
  isAdmin: { type: Boolean, default: false }, 
  personId:String,
  role:String,
})

module.exports = mongoose.model('register', userSchema);
