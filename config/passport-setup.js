const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys');

module.exports = passport.use(
    new GoogleStrategy({
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret,
    callbackURL:"http://localhost/google/redirect"
    },
    function(accessToken, refreshToken, profile, cb){
        //something here
    }

));