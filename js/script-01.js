// ask first number
var firstNumber = parseInt(prompt('Write the first number'));
console.log(firstNumber);

// ask second number
var secondNumber = parseInt(prompt('Write the second number'));
console.log(secondNumber);

// print bigger number
if (firstNumber > secondNumber) {
  console.log("First number is bigger")
} else if (firstNumber < secondNumber) {
  console.log("Second number is bigger")
} else {
  console.log('They are the same')
}
