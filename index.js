var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceIMG = "dice" + randomNumber1 + ".png";

var randomIMGsrc = "images/" + randomDiceIMG;

var image1dice = document.querySelectorAll("img")[0];

image1dice.setAttribute("src", randomIMGsrc);

//2nd Dicee
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceIMG2 = "dice" + randomNumber2 + ".png";

var randomIMGsrc2 = "images/" + randomDiceIMG2;

var image2dice = document.querySelectorAll("img")[1];

image2dice.setAttribute("src", randomIMGsrc2);
//to deisplay winner
if(randomNumber1>randomNumber2){
document.querySelector("h1").innerHTML="Plater 1 wins";
}
else{
  document.querySelector("h1").innerHTML="Player 2 wins";
}
