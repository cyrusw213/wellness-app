// dependencies
const mongoose = require('mongoose');

// User Schema
const userSchema = mongoose.Schema({
    email: {type: String, unique: true, required: true},
    password: {type: String, required: true}
})

const User = mongoose.model('User', userSchema);

module.exports = User;