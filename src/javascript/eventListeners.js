var $ = require('jquery')
var postRequest = require('./postRequest')
var isValid = require('./wordchecks').isValid
var appendLetters = require('./appendLetters')
var appendToList = require('./appendToList')

// ---------------------------------------------

var possibleWords = ['adjusting', 'education', 'solemnity', 'facetious', 'pseudonym', 'birthdays', 'biography', 'symphonic', 'awestruck', 'copyright', 'grandiose', 'advection', 'abruption', 'baritones', 'barometry', 'baroquely', 'baulkiest', 'blotching', 'branchlet', 'brominate', 'bystander', 'calotypes', 'capsuling', 'complaint', 'compliant', 'construed', 'consulate', 'conscript', 'costumier', 'dragonfly', 'duplicate', 'emigrants', 'frugality', 'graphites', 'growliest', 'hangovers', 'hardcover', 'hideously', 'imputable', 'infarcted', 'judgments', 'jubilance', 'lucrative']
// var possibleWords = ['adjusting', 'education']

var randomWord = Math.floor(Math.random()*possibleWords.length)
var currentWord = possibleWords[randomWord].toUpperCase()
var lettersArray = currentWord.split("")

lettersArray.sort()
console.log(lettersArray)
console.log("Hello!")

$('#row1 .col1').html(lettersArray[1])
$('#row1 .col2').html(lettersArray[2])
$('#row1 .col3').html(lettersArray[3])
$('#row2 .col1').html(lettersArray[4])
$('#row2 .col2').html(lettersArray[0])
$('#row2 .col3').html(lettersArray[5])
$('#row3 .col1').html(lettersArray[6])
$('#row3 .col2').html(lettersArray[7])
$('#row3 .col3').html(lettersArray[8])

// --------------------------------------------

var arr = []
// var seedWords = ["biography", "information"]

$(document).ready(function() {

  $('#submit-button').click(function(e) {
  	e.preventDefault()
    console.log(currentWord)
  	var newWord = $('#new-word-input').val()
	  // postRequest(newWord)
    // check if new word is valid e.g. isValid("cat", "biography", prevEntries)
    var isValAns = isValid(newWord, currentWord, arr )
    console.log(isValAns)
    // if it is OK then add it to the array of previos entries and append to the HTML list
    if(isValAns) {
      arr.push(newWord)
      appendToList(newWord)
    }
    else {
      alert('Sorry! Try again')
    }
	  $('#new-word-input').val('')
  })
})

