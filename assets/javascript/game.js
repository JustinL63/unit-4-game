var randomGoal;
var crystalValue = [];
var totalScore = 0;
var wins = 0;
var losses = 0;

function update_randomGoal() {
    randomGoal = Math.floor(Math.random() * 101) + 19;
}

function return_crystalValue() {
    return Math.floor(Math.random() * 11) + 1;
}

function generate_CrstaylValue() {
    for (let i = 0; i < 4; i++) {
        crystalValue[i] = return_crystalValue();
        var newDiv = $(".Crystals");
       var assignedVale = $("<div>" + crystalValue[i] + "</div>");
    }

}

function onClick(buttonClick) {
    totalScore += crystalValue[buttonClick];
    if (totalScore >= randomGoal) { // game over
        if (totalScore === randomGoal) // you won this game
            wins++
        else
            losses++
        new_Game();
    }
}

function new_Game() {
    update_randomGoal();
    generate_CrstaylValue();
    updateScreen();
}

function updateScreen() {

}

$(document).ready(function(){
    new_Game();
    console.log("this is a test");
});