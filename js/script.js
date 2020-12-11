var name = prompt('What\'s your name?');
console.log('memeber\'s name is: ' + name);
var surname = prompt('What\'s your surname?');
console.log('memeber\'s surname is: ' + surname);
var color = prompt('What\'s your favourite color?');
console.log('memeber\'s favourite color is: ' + color);
var currentYear = new Date().getFullYear();

var outputContainer = document.getElementById('print');
outputContainer.innerText = 'Your undecryptable password is: ' + name + surname + color + currentYear;
