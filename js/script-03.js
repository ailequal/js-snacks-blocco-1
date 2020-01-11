// var
var arrayNumbers = [];
var arraySum = 0
var i = 0;

// ask 5 times to insert a number and sum them
// for version
for (i = 0; i < 5; i++) {
  arrayNumbers[i] = parseInt(prompt('Insert a number'));
  arraySum += arrayNumbers[i];
}

// ask 5 times to insert a number and sum them
// while version
while (i < 5) {
  arrayNumbers[i] = parseInt(prompt('Insert a number'));
  arraySum += arrayNumbers[i];
  i++;
}

// print results
console.log(arrayNumbers);
console.log(arraySum);
