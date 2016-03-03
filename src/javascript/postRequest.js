var request = require('superagent')
var path = require('path')
var appendToList = require('./appendToList')


module.exports = function (newWord, callback) {
	console.log(typeof newWord, newWord)
	request
		.post('http://localhost:3000/word')
		.send({ "word": newWord })
		.end(function(err, res) {
			console.log('res', res)
			appendToList(res.body.word)
	// var cellarArray = []
})
}
//problems here