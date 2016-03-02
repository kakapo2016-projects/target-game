var initialWord = "biography"
var splitInitialWord = initialWord.split("")
console.log(splitInitialWord)

var testWordPass = 'graph'
var testWordPass2 = 'bog'
var testWordFail = 'grapple' //duplicate letters
var testWordFail2 = 'ogr' //not a word
var testWordFail3 = 'biographography' //too long
var testWordFail4 = 'cat' // not all letters are in initial word

//check if it has too many letters

function testWordLength(word){
  if(word.length > 9){
    return false
  } else {
    return true
  }
}

// check if it has been submitted before

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


//check everything

function checkEverything(word, initialWord){
  if (testWordLength(word) && checkDuplicates(word) && testWordInitial(word,initialWord)){
    console.log("success")
    return true
  }
  console.log("what a failure")
  return false
}



checkEverything(testWordPass, initialWord);
checkEverything(testWordPass2, initialWord);
checkEverything(testWordFail, initialWord);
checkEverything(testWordFail2, initialWord);
checkEverything(testWordFail3, initialWord);
checkEverything(testWordFail4, initialWord);
// checkDuplicates('happy')
// checkDuplicates('biography')
// checkDuplicates('biographography')