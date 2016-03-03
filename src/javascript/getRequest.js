var request = require('superagent')
var $ = require('jquery')

module.exports = function () {
	console.log('we are in getrequest')
	request
		.get('http://localhost:3000/word')
		.end(function(err, res) {
			console.log(res.body.word)
			appendtoList(res.body.word)
	})
}


function appendtoList(wordsData){
	// var cellarArray = []
	console.log(wordsData)

 	$('#word-list').text('')
  wordsData.forEach(function(word) {
  	$('#word-list').append('<li>' + word + '</li>')
  })
}