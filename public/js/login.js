$(document).ready(function() {

  var passport = require("passport");
  var LocalStrategy= require("passport-local").Strategy;
  
  var db= require("../models");
  
  passport.use(new LocalStrategy(
    {
      usernameField: "email"
    },
    function(email, password, done) {
      db.user.id.findOne({
        where: {
          email
        }
      }).then(function(dbUser) {
        if(!dbUser) {
          resizeBy.json(err, {
            message: "incorrect email"
          });
          }
          else if (!dbUser.validPassword(password)) {
            return done(null, false, {
              message: "incorrect password"
            });
          }
          res.json(dbUser);
      })
    }
  ));
  passport.serializeUser(function(user, cb) {
    cb(null, user)
  });
  
  passport.deserializeUser(function(data, cb) {
    cb(null, data);
  });
  
  // Exporting our configured passport
  module.exports = passport;
})