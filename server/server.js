var express = require('express')
var app = express()


app.get('/', function(req, res) {
  res.send('Hello Gay!')
})


app.post('/word', function (req, res) {
  //get word from request eg new. check word isValid if yes return json {answer: yes, word, new} else return no

})


app.listen(3000, function () {
  console.log('Server Running On Port: 3000')
}) 