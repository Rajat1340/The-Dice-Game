var randomNumber1 = Math.floor(Math.random() * 6) + 1; // random number between 1 and 6

var randomDiceImage = "dice" +randomNumber1 + ".png"; //image of dice between dice1.png - dice6.png pased on random number generated.

var randomImageSource = "images/" + randomDiceImage ; //images/dice1.png - images/dice6.png 

var Image1 = document.querySelectorAll("img")[0];

Image1.setAttribute("src",randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + randomNumber2 + ".png";

var randomImageSource = "images/" + randomDiceImage ;

var Image2 = document.querySelectorAll("img")[1];

Image2.setAttribute("src",randomImageSource);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}

else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}

else {
    document.querySelector("h1").innerHTML = "Draw!";
}

