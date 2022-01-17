var randomNum1 = Math.floor(Math.random() * 6) + 1;
var randomNum2 = Math.floor(Math.random() * 6) + 1;

var dice1 = "images/dice" + randomNum1 +".png";
var dice2 = "images/dice" + randomNum1 +".png";

document.querySelector("#dice .img1").setAttribute("src", dice1);
document.querySelector("#dice .img2").setAttribute("src", dice2);


