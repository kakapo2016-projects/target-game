var request = require('superagent')
var $ = require('jquery')

module.exports = 
function appendToList(newWord){
  	$('#word-list').append('<li>' + newWord + '</li>')
  }