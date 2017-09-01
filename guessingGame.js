var playerOne = prompt("Player 1: Choose a number between 1 and 6.");
if ((playerOne < 1) || (playerOne > 6) || isNaN(playerOne)) { //NaN means "Not a Number"//
	window.alert("Invalid entry");
}
else {
	var playerTwo = prompt("Player 2: Guess a number between 1 and 6.");
  if (playerOne == playerTwo) {
  	window.alert("You win!");
  }
  else {
  	window.alert("Player one answer was " + playerOne);
    window.alert("You chose " + playerTwo);
  }
}
