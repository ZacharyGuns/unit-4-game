// Variables
var randomNumber = ["19", "120"];
var matchNumber;
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
document.getElementById("yourScoreIs").innerHTML = "Your current score is: " + playerScore;
document.getElementById("playerNumber").innerHTML = playerScore;
document.getElementById("wins").innerHTML = "Wins: " + winsScore;
document.getElementById("losses").innerHTML = "Losses: " + lossesScore;

//===========================================================================
// Functions

function chooseNumber() {
    matchNumber = randomNumber[Math.floor(Math.random() * randomNumber.length)];
}

function loopRandomNumber() {
    for (var i = 0; i < randomNumber.length; i++) {
    }
}