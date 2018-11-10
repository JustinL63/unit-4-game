var generateGoal = 0;
var crystalValue = [0,0,0,0];
var totalScore = 0;
var wins = 0;
var losses = 0;

function generate_randomGoal() {
    generateGoal = Math.floor(Math.Random() * 101) + 19;
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
}

function new_Game() {
    generate_randomGoal();
    generate_CrstaylValue();
    updateScreen();    
}

function updateScreen() {

}