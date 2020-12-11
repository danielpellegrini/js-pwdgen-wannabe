var userAge = prompt('how old are you?')

if (userAge > 18) {
  document.getElementById("print").innerHTML = "congrats! you are an adult";
} else {
  document.getElementById("print").innerHTML = "poor boy! you are a child";
}

if (userAge < 5) {
  document.getElementById("print").innerHTML = "you shouldn't be here";
}
