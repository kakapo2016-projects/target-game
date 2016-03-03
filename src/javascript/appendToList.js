var request = require('superagent')
var $ = require('jquery')

module.exports = 
function appendToList(newWord){
	// var cellarArray = []
	console.log(newWord)

 	$('#word-list').text('')
  	$('#word-list').append('<li>' + newWord + '</li>')
  }