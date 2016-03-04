var express = require('express')
var bodyParser = require('body-parser')
var app = express()
var passport = require('../passport/authentication')
process.env.NODE_ENV = process.env.NODE_ENV || 'development'
var routes = require('./routes')
// var isValid = require('../src/javascript/wordchecks.js').isValid
// console.log(isValid())
// app.use(express.static('public'));

// please change
function isValid(word) {
  //randomly chooses true or false
  return (Math.floor(Math.random()*2) === 1) 
}

//  -------- set up middleware -------------

app.use(bodyParser.urlencoded({ extended: false })) 
app.use(bodyParser.json()) 

app.use(express.static('public'));

// -------- set up routes -------------------

app.get('/', function(req, res) {
  res.render('/')
})

app.post('/word', function (req, res) {
	console.log(req.body)
  //get word from request eg new. check word isValid if yes return json {answer: yes, word, new} else return no
  console.log('req.body.word is:', req.body.word)
  if(isValid(req.body.word))
    res.json({
                  "answer": "yes",
                    "word": req.body.word
                 })
  else
  res.json({
                  "answer": "no",
                  "word": ""
               })
})


//Authentication
app.get('/login', 
  passport.authenticate('facebook', {scope: ['email']}, { failureRedirect: '/login'})),
    function (req, res) {
      res.redirect('/')
}

// -------- set up port ------------

app.listen(3000, function () {
  console.log('Server Running On Port: 3000')
}) 
