/*var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource); */

var randomNumber = Math.floor(Math.random() *  6) + 1;
var randomDice = "dice" + randomNumber + ".png";
var randomDice1 = "images/" + randomDice;
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", randomDice1);

var randomNumber1 = Math.floor(Math.random() *6) +1;
var randomDice2 = "dice" + randomNumber1 + ".png";
var randomImage = "images/" + randomDice2;
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src",randomImage);

if( randomNumber > randomNumber1) {
    document.querySelector("h1").innerHTML="Winner Winner <br>Player 1 <br> chicken dinner"
}
else if(randomNumber < randomNumber1) {
    document.querySelector("h1").innerHTML="Winner Winner <br>Player 2 <br> chicken dinner"

}
else {
    document.querySelector("h1").innerHTML="Decide among yourself <br>who is giving <br>party"
}