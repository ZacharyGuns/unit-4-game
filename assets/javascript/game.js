// Variables

var currentNumber = randomBetween();
var yourScoreIs;
var playerScore = 0;
var diamondPoints = 10;
var rubyPoints = 7;
var sapphirePoints = 4;
var emeraldPoints = 1;
var winsScore = 0;
var lossesScore = 0;

//======================================================================================================================
// Page text

/*
document.getElementById("matchNumber").innerHTML = currentNumber;
*/
// document.getElementById("yourScoreIs").innerHTML = "Your current score is: " + playerScore;
// setScoreText(playerScore);
setScoreText(playerScore);
document.getElementById("wins").innerHTML = "Wins: " + winsScore;
document.getElementById("losses").innerHTML = "Losses: " + lossesScore;

//======================================================================================================================
// Functions
randomBetween(currentNumber);
document.getElementById("matchNumber").innerHTML = randomBetween(19,120);

function randomBetween(min, max) {
  return Math.floor(Math.random() * max) + min;
}

function setScoreText(score) {
  document.getElementById("yourScoreIs").innerHTML = "Your current score is: " + score;
}

//======================================================================================================================
// jQuery

$("#diamond").on("click", function gemPoints() {
  playerScore += diamondPoints;
  setScoreText(playerScore);
});

$("#ruby").on("click", function gemPoints() {
  playerScore += rubyPoints;
  setScoreText(playerScore);
});

$("#sapphire").on("click", function gemPoints() {
  playerScore += sapphirePoints;
  setScoreText(playerScore);
});

$("#emerald").on("click", function gemPoints() {
  playerScore += emeraldPoints;
  setScoreText(playerScore);
});




// trying to get the score to change...
$(".gemButtons").click(function() {
  if (playerScore === currentNumber) {
    winsScore++;
  }
  else if (playerScore > currentNumber) {
    lossesScore++;
  }
});

/*
function checkScore() {
  if (playerScore === currentNumber) {
    winsScore++;
  }
  else if (playerScore > "matchNumber") {
    lossesScore++;
  }
}
*/

/*
document.onkeyup = function(event) {
  var checkScore = event.key;
  if (playerScore === "matchNumber") {
    winsScore++;
  }
  else if (playerScore > "matchNumber") {
    lossesScore++;
  }
};
*/




/* Random number on button test:
$("#diamond").on("click", function gemPoints() {
  playerScore += Math.floor(Math.random() * 50) + 1;
  setScoreText(playerScore);
});
*/


/* Gem button test:
var counter = 0;

$("#diamond").on("click", function() {
  counter += 1;
  alert("You clicked the diamond " + counter + " times!");
});

$("#ruby").on("click", function() {
  counter += 2;
  alert("You clicked the ruby " + counter + " times!");
});

$("#sapphire").on("click", function() {
  counter += 3;
  alert("You clicked the sapphire " + counter + " times!");
});

$("#emerald").on("click", function() {
  counter += 4;
  alert("You clicked the emerald " + counter + " times!");
});
*/