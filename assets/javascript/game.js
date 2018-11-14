//make sure html is loaded
$(document).ready(function () {
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
        console.log("you new number is " + randomGoal);
    }

    function return_crystalValue() {
        return
    }

    //I need this to update the totalscore to include the value of the crystal clicked
    //and then to check and see if the totalscore is equal to or greater than the randomgoal
    function scoreCheck(totalScore) {
        console.log("this is total score " + totalScore);
        console.log("this is random Goal " + randomGoal);

        //check to see if total score is the same as the target number
        if (totalScore >= randomGoal) { // game over
            if (totalScore === randomGoal) {// you won this game
                console.log("You won the game");
                wins++;
            } else {
                console.log(("you lost the game"));
                losses++;
                new_Game();
            }
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
        // console.log(totalScore);
        //call a function to check the values for a match or not
        //run scorecheck on each crystal
        scoreCheck(totalScore);

    });

    //click on this and it will update the total score with the random assigned value to crystal 2
    $("#crystalTwo").on("click", function () {
        (totalScore += crystalTwoValue);
        // console.log(totalScore);
        scoreCheck(totalScore);
    });
    ////click on this and it will update the total score with the random assigned value to crystal 3
    $("#crystalThree").on("click", function () {
        (totalScore += crystalThreeValue);
        // console.log(totalScore);
        scoreCheck(totalScore);
    });
    //click on this and it will update the total score with the random assigned value to crystal 4
    $("#crystalFour").on("click", function () {
        (totalScore += crystalFourValue);
        // console.log(totalScore);
        scoreCheck(totalScore);

    });


    new_Game();



});//end of docu.ready