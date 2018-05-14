// Variables
var randomNumber = ["19", "120"];
var currentNumber = 0;
var yourScoreIs;
var playerScore = 0;
var diamond;
var ruby;
var sapphire;
var emerald;
var winsScore = 0;
var lossesScore = 0;

//===========================================================================
// Page text
document.getElementById("matchNumber").innerHTML = currentNumber;
document.getElementById("yourScoreIs").innerHTML = "Your current score is: " + playerScore;
document.getElementById("wins").innerHTML = "Wins: " + winsScore;
document.getElementById("losses").innerHTML = "Losses: " + lossesScore;

//===========================================================================
// Functions

/*
function chooseNumber() {
    matchNumber = randomNumber[Math.floor(Math.random() * randomNumber.length)];
}

function loopRandomNumber() {
    for (var i = 0; i < randomNumber.length; i++) {
    }
}
*/

var counter = 0;

$("#diamond").on("click", function() {
  counter += 1;
  alert("You clicked the diamond " + counter + " times!");
});

$("#ruby").on("click", function() {
  counter += 1;
  alert("You clicked the ruby " + counter + " times!");
});

$("#sapphire").on("click", function() {
  counter += 1;
  alert("You clicked the sapphire " + counter + " times!");
});

$("#emerald").on("click", function() {
  counter += 1;
  alert("You clicked the emerald " + counter + " times!");
});