var FacebookStrategy = require('passport-facebook').Strategy
var passport = require('passport')
var dotenv = require('dotenv')

dotenv.load()

passport.use(
      new FacebookStrategy( {
          clientID : process.env.CLIENT_ID,
          clientSecret : process.env.CLIENT_SECRET,
          callbackURL : 'http://localhost:3000/'
        },
        function (accessToken, refreshToken, profile, callback) {
          //PLEASE CHECH IF MAKES SENSE!!
          // find User By Profile
            // if found
              // callback(null, user)
            // else not found
              // create new user with profile
                // save user to db
                  // callback(null user)

          return callback(null, profile)
      })
  )


passport.serializeUser(function(user, callback) {
  callback(null, user);
});

passport.deserializeUser(function(obj, callback) {
  callback(null, obj);
});


module.exports = passport

