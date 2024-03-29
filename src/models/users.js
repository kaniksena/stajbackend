const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    name: String,
    surname: String,
    email: String
},
{collection:'users'});

const User = mongoose.model('User', userSchema);

module.exports = User;