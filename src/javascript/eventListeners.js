var $ = require('jquery')
// var displayWordList = require('./displayWordList.js')
var postRequest = require('./postRequest')

$(document).ready(function() {

  // displayWordList()

  $('#submit-button').click(function(e) {
  	e.preventDefault()
  	console.log($('#new-word-input').val())
  	newWord = $('#new-word-input').val()
	console.log('click')
	console.log("New Word", newWord)
	postRequest(newWord)
  })
})

