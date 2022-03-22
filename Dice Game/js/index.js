
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDice1 = "dice-" + randomNumber1 + ".png";

var randomImageSource = "img/" + randomDice1;

var dice1 = document.querySelectorAll("img")[0];

dice1.setAttribute("src", randomImageSource);


//dice 2 set up

var randomNumber2 = Math.floor(Math.random() *6) + 1;

var randomImageSource2 = "img/dice-" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


//If player 1 wins

if (randomNumber1 > randomNumber2){
	document.querySelector("h1").innerHTML = "Player 1 Wins!";
}

else if (randomNumber2 > randomNumber1) {
	document.querySelector("h1").innerHTML = "Player 2 Wins!";
}

else {
	document.querySelector("h1").innerHTML = "Draw!";
}
