var request = require('superagent')
var path = require('path')
var appendToList = require('./appendToList')


module.exports = function (newWord, callback) {
	request
		.post('http://localhost:3000/word')
		.send({ "word": newWord })
		.end(function(err, res) {
			if (res.body.answer ==='yes') {
				appendToList(res.body.word)
			}
			else {
				alert('Sorry! Try again')
			}
})
}