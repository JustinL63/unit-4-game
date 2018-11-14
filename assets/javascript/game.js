var randomGoal = 0;
var totalScore = 0;
var wins = 0;
var losses = 0;
var crystalOneValue = 0;
var crystalTwoValue = 0;
var crystalThreeValue = 0;
var crystalFourValue = 0;

//creates a random number that you are trying to equal with the crystal clicks
function update_randomGoal() {
    randomGoal = Math.floor(Math.random() * 101) + 19;
    console.log(randomGoal);
}

function return_crystalValue() {
    return
}

//I need this to update the totalscore to include the value of the crystal clicked
//and then to check and see if the totalscore is equal to or greater than the randomgoal
function scoreCheck(totalScore) {
    //check to see if total score is the same as the target number
    if (totalScore >= randomGoal) { // game over
        if (totalScore === randomGoal) // you won this game
            wins++
        else
            losses++;
            new_Game();
    }
}

function new_Game() {
    //Get a new random number to match
    update_randomGoal();
    //get random numbers for every crystal
    crystalOneValue = Math.floor(Math.random() * 12) + 1;
    crystalTwoValue = Math.floor(Math.random() * 12) + 1;
    crystalThreeValue = Math.floor(Math.random() * 12) + 1;
    crystalFourValue = Math.floor(Math.random() * 12) + 1;
    //* **ToDo** build out this function
    updateScreen();

}

function updateScreen() {

}


//When we click on this button the total value = the crystal
//clicked + the total value = new total value
$("#crystalOne").on("click", function () {
    (totalScore += crystalOneValue);
    console.log(totalScore);
    //call a function to check the values for a match or not
    //run scorecheck on each crystal
    scoreCheck();
});

$("#crystalTwo").on("click", function () {
    (totalScore += crystalTwoValue);
    console.log(totalScore);
    scoreCheck();
});

$("#crystalThree").on("click", function () {
    (totalScore += crystalThreeValue);
    console.log(totalScore);
    scoreCheck();
});

$("#crystalFour").on("click", function () {
    (totalScore += crystalFourValue);
    console.log(totalScore);
    scoreCheck();
    
});

$(document).ready(function () {
    new_Game();
    scoreCheck();
    console.log("this is a test");

});