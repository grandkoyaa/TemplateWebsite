const { Schema, model } = require('mongoose');

const userModel = new Schema({
  username: {
    type: String,
    required: true
  }
});

module.exports = model('users', userModel);
