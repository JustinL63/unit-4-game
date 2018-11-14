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
        $("#crystalOne").html(crystalValue[0]);
        $("#crystalTwo").html(crystalValue[1]);
        $("#crystalThree").html(crystalValue[2]);
        $("#cyrstalFour").html(crystalValue[3]);
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



$("#crystalOne").on("click", function(){
    (totalScore += crystalValue[0]);
    console.log(totalScore);
});

$("#crystalTwo").on("click", function(){
    (totalScore += crystalValue[1]);
    console.log(totalScore);
});

$("#crystalThree").on("click", function(){
    (totalScore += crystalValue[2]);
    console.log(totalScore);
});

$("#crystalFour").on("click", function(){
    (totalScore += crystalValue[3]);
    console.log(totalScore);
});

$(document).ready(function(){
    new_Game();
    onClick();
    console.log("this is a test");
    console.log(crystal)
});