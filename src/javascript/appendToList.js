var request = require('superagent')
var $ = require('jquery')

var score = 0

module.exports = 
function appendToList(newWord){
  	$('#word-list').append('<li>' + newWord + '</li>')
  	score ++
  	console.log('score', score)
  }
  //remember to append score into H3 tag. 
