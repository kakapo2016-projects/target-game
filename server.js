var express = require('express')
var app = express()


app.get('/', function(req, res) {
  res.send('Hello Gay!')
})


app.listen(3000, function () {
  console.log('Server Running On Port: 3000')
})