// var teacher = require('teacher');

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
// function checkDictionary(word, callback) {
//   teacher.check(word, function(err, data) {
//     console.log(data)
//     if (data === null){
//       console.log('yes')
      
//     }
//     else {
//       console.log('no')
      
//     }
//     console.log("hi")
//   });
// }

//check everything

function isValid(word, initialWord, arrayPrevious){
  if (testWordLength(word) && checkDuplicates(word) && testWordInitial(word,initialWord) && checkPreviouslySubmitted(word, arr)){
    // if (checkDictionary(word) === true){
      console.log("success")
      return true
    } else {
  //     console.log('youre a failure')
  //     return false
  //   }
  // } 
  console.log("what a failure")
  return false
}

// console.log(checkDictionary('cat'))
// console.log(checkDictionary('fjrheigrueibviurehbv'))

// isValid(testWordPass, initialWord, examplePreviousArray);
// isValid(testWordPass2, initialWord, examplePreviousArray);
// isValid(testWordFail, initialWord, examplePreviousArray);
// isValid(testWordFail2, initialWord, examplePreviousArray);
// isValid(testWordFail3, initialWord, examplePreviousArray);
// isValid(testWordFail4, initialWord, examplePreviousArray);
// isValid(testWordFail5, initialWord, examplePreviousArray);
// checkDuplicates('happy')
// checkDuplicates('biography')
// checkDuplicates('biographography')