// array with names to party
var partyList = ['Marco', 'Irene', 'Giovanni', 'Luca', 'Matteo', 'Paolo', 'Mirco', 'Mauro', 'Prisca', 'Camilla'];
console.log('This is the party list: ' + partyList);

// ask user name
var userName = prompt("What's your name?");
console.log('Your name is ' + userName);

// check if he can go to the party
var check = false;
var message = 'Sorry, your name is not on the list';
for (var i = 0; i < partyList.length; i++) {
  if (partyList[i] === userName) {
    check = true;
    message = 'Welcome to the party';
  }
}
console.log(message);
