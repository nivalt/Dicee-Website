document.querySelector(".btn-start").addEventListener("click", shuffleDice);

function shuffleDice() {

/*suffle the dice when button pressed */
  
    var randomNum1 = Math.floor(Math.random() * 6) + 1;
    var randomNum2 = Math.floor(Math.random() * 6) + 1;
    var dice1 = "images/dice" + randomNum1 +".png";
    var dice2 = "images/dice" + randomNum2 +".png";
    document.querySelector(".dice .img1").setAttribute("src", dice1);
    document.querySelector(".dice .img2").setAttribute("src", dice2);
    
    var title = "";
    if (randomNum1 > randomNum2){
        title = "🎉 Player 1 Wins!";
    } else if (randomNum1 < randomNum2){
        title = "Player 2 Wins! 🎉";
    }
    else {
        title = "No Winners";
    }
    document.querySelector("h1").innerHTML = title;
}
