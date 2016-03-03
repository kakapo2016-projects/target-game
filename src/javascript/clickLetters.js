var $ = require('jquery')

$(".cell").click(function(e) {
	var letter = e.target.innerText
	var inputValue = $('#new-word-input').val() 
	var actualWord = inputValue += letter
	$('#new-word-input').val(actualWord)
})
