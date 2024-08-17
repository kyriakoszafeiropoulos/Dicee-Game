var randomNumber1 = Math.floor((Math.random() * 6)) + 1;
var randomNumber2 = Math.floor((Math.random() * 6)) + 1;
var randomDiceImage1 = "dice" + randomNumber1 + ".png";
var randomDiceImage2 = "dice" + randomNumber2 + ".png";


document.querySelector(".img1").setAttribute("src" , randomDiceImage1);

document.querySelector(".img2").setAttribute("src" , randomDiceImage2);

if(randomNumber1 === randomNumber2) {
  document.querySelector("h1").innerHTML = "Draw!"
}
else if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "&#128681 Player 1 wins!"
}
else if (randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML = "Player 2 wins! &#128681"
}