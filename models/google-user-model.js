const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const GoogleUserSchema = new Schema({
    username:String,
    googleID:String,
    thumbnail:String
});

const GoogleUser = mongoose.model('googleuser', GoogleUserSchema);

module.exports = GoogleUser;