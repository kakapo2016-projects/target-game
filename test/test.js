var test = require('tape')
var wordchecks = require('../src/javascript/wordchecks.js')
var testWordLength = require('../src/javascript/wordchecks').testWordLength
var checkPreviouslySubmitted = require('../src/javascript/wordchecks').checkPreviouslySubmitted
var checkDuplicates = require('../src/javascript/wordchecks').checkDuplicates
var testWordInitial = require('../src/javascript/wordchecks').testWordInitial
var isValid = require('../src/javascript/wordchecks').isValid

console.log("Does cat have length less than 9?: ", testWordLength("cat"))
 //arange: fakeDate, expectedResults
var clearlyRight = 'cat'
var clearlyWrong = "qwertyasdf"
var expectedResult = true

test('test of foo and bar', function(t){
  //action: call the function and assign to 'actualSmthng'
  var actualResult = testWordLength(clearlyRight)
  var isValBadResult = isValid("cat", "biography", [])
  var isValGoodResult = isValid("gap", "biography", [])


  //assert: test if actual equals expected
  t.equal(actualResult, expectedResult, "testWordLength looks mighty good to me!")
  t.equal(isValBadResult, false, "isValid looks OK so far - rejects bad word")
  // t.equal(isValGoodResult, true, "isValid looks OK so far - accepts good word")

  t.end()
})

