var express = require('express')
var bodyParser = require('body-parser')
var app = express()
var passport = require('../passport/authentication')
process.env.NODE_ENV = process.env.NODE_ENV || 'development'
// var isValid = require('./isValid.js')

// app.use(express.static('public'));

//please change
function isValid(word) {
  return true
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
  if(isValid(req.body.word)) ///This is NOT a real function! please see line 23
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
  passport.authentictate('facebook', { failureRedirect: '/login'})),
    function (req, res) {
      res.redirect('/')
    }

// -------- set up port ------------

app.listen(3000, function () {
  console.log('Server Running On Port: 3000')
}) 
