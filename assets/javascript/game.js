var randomGoal = 0;
var crystalValue = [0, 0, 0, 0];
var totalScore = 0;
var wins = 0;
var losses = 0;

function update_randomGoal() {
    randomGoal = Math.floor(Math.Random() * 101) + 19;
}

function return_crystalValue() {
    return Math.floor(Math.Random() * 11) + 1;
}

function generate_CrstaylValue() {
    for (let i = 0; i < crystalValue.length; i++) {
        crystalValue[i] = return_crystalValue();
    }
}

function onClick(buttonClick) {
    totalScore += crystalValue[buttonClick];
    if (totalScore >= randomGoal) { // game over
        if (totalScore === randomGoal) //you won this game
            wins++ //add one win to win tally
        else losses++ // ad one loss to losses tally
    }
}

function new_Game() {
    generate_randomGoal();
    generate_CrstaylValue();
    updateScreen();
}

function updateScreen() {

}