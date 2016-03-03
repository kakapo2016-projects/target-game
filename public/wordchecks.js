var teacher = require('teacher');

var initialWord = "biography"
var splitInitialWord = initialWord.split("")
console.log(splitInitialWord)

var testWordPass = 'graph'
var testWordPass2 = 'bog'
var testWordFail = 'grapple' //duplicate letters
var testWordFail2 = 'ogr' //not a word
var testWordFail3 = 'biographography' //too long
var testWordFail4 = 'cat' // not all letters are in initial word
var testWordFail5 = 'god' // already been used

var examplePreviousArray = ['hello', 'god', 'goodbye']

//check if it has too many letters

function testWordLength(word){
  if(word.length > 9){
    return false
  } else {
    return true
  }
}

// check if it has been submitted before

function checkPreviouslySubmitted(word, arr){
  if (arr.indexOf(word) > 0) {
    return false
  }
  return true
}

// check if it has any duplicate letters


function checkDuplicates(word){
  for (i=0; i<word.length; i++){
    if (word.indexOf(word[i]) !== word.lastIndexOf(word[i])){
      // console.log("dublicates failure")
      return false
    }
  }
  // console.log('duplicates success')
  return true
}

// check if all of the letters are in the initial word

function testWordInitial(word,initialWord){
  splitTestWord = word.split("")
  for (i=0; i < splitTestWord.length; i++){
    if (initialWord.indexOf(splitTestWord[i])<0){
      // console.log('check initial word')
      return false
    }
  }
  // console.log('this is a success!')
  return true
}

//check if it is in the dictionary
function checkDictionary(word) {
  teacher.check(word, function(err, data) {
    console.log(data)
    if (data === null){
      console.log('yes')
      return true
    }
    else {
      console.log('no')
      return false
    }
    console.log("hi")
  });
}

//check everything

function checkEverything(word, initialWord, arr){
  if (testWordLength(word) && checkDuplicates(word) && testWordInitial(word,initialWord) && checkPreviouslySubmitted(word, arr)){
    if (checkDictionary(word) === true){
      console.log("success")
      return true}
    else {
      console.log('youre a failure')
      return false
    }
  } 
  console.log("what a failure")
  return false
}

console.log(checkDictionary('cat'))
console.log(checkDictionary('fjrheigrueibviurehbv'))

// checkEverything(testWordPass, initialWord, examplePreviousArray);
// checkEverything(testWordPass2, initialWord, examplePreviousArray);
// checkEverything(testWordFail, initialWord, examplePreviousArray);
// checkEverything(testWordFail2, initialWord, examplePreviousArray);
// checkEverything(testWordFail3, initialWord, examplePreviousArray);
// checkEverything(testWordFail4, initialWord, examplePreviousArray);
// checkEverything(testWordFail5, initialWord, examplePreviousArray);
// checkDuplicates('happy')
// checkDuplicates('biography')
// checkDuplicates('biographography')