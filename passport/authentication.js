var FacebookStrategy = require('passport-facebook').Strategy
var passport = require('passport')
var dotenv = require('dotenv')

// var knex = require('knex')({
//   client: 'sqlite3',
//   connection: {
//     filename: "../data/scoreboard.sqlite"
//   }
// });

dotenv.load()

// passport.use(
//       new FacebookStrategy( {
//           clientID : process.env.CLIENT_ID,
//           clientSecret : process.env.CLIENT_SECRET,
//           callbackURL : 'http://localhost:3000/', 
//           profile: ['id', 'displayName', 'email']
//         },
//         function (accessToken, refreshToken, profile, callback) {
//          //is user an existing user?
        
//          knex.raw('SELECT * FROM ' + 'scoreboard' + ' WHERE id= '+ profile.id)
//             .then(function(resp) {
//               console.log(resp)

//             callback(null, resp)
//               })
//             }))

//           knex('scoreboard').insert(profile).then(function(resp) {
//             callback(null, resp)
//             // if found
//               // callback(null, user)
//             // else not found
//               // create new user with profile. knex scoreboard insert new user
//                 // save user to db

//           return callback(null, profile)
//       })
  


passport.serializeUser(function(user, callback) {
  callback(null, user);
});

passport.deserializeUser(function(obj, callback) {
  callback(null, obj);
});





module.exports = passport

