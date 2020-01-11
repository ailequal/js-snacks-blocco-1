// Ask first word
var firstWord = prompt('Insert the first word');
// console.log(firstWord);

// Ask second word
var secondWord = prompt('Insert the second word');
// console.log(secondWord);

// Print the shortest first, then the other one
if (firstWord.length < secondWord.length) {
  console.log(firstWord);
  console.log(secondWord);
} else if (firstWord.length > secondWord.length) {
  console.log(secondWord);
  console.log(firstWord);
} else {
  console.log("They both have the same length");
}
