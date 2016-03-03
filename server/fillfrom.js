// Array.fill()

var letters = ["A", "B", "C", "D", "E", "F", "G"];
letters.fill("X", 2, 5)

// Some objects in js are array-like. They have indexed items and you can use .length, but none of the array methods. 
// An example of array-like objects are DOM results. 
// Array.from() converts these objects to arrays so the array methods can be used. 

// var lis = document.getElementByTagName("li")

// lis.forEach(function(){
// console.log('hello')})


// Array.from(lis).forEach(function(li){
// console.log('hello')

// Array methods:
// push
// pop
// shift
// unshift
// sort
// reverse
// splice
// join
// concat
// valueOf
// indexOf
// toString
// every
// some
// forEach
// map
// reduce
// splice
