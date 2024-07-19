const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  emailid: String,
  subject: String,
  message: String,
})

module.exports = mongoose.model('Contectus', userSchema);
