var $ = require('jquery')
var postRequest = require('./postRequest')

$(document).ready(function() {

  $('#submit-button').click(function(e) {
  	e.preventDefault()
  	newWord = $('#new-word-input').val()
	postRequest(newWord)
	$('#new-word-input').val('')
  })
})

