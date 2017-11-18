$(document).ready(function() {
    // Global Game Variables 
    var wins = 0;
    var loses = 0;

    var totalScore = 0;
    var randomNo = 0

    // Gem Variables 
    var greenNum = 0
    var redNum = 0
    var blueNum = 0
    var diamondNum = 0

    // Restart Function 
    function restart() {

        totalScore = 0
        $("#totalScore").text(0); //Insert 0 for new game 

        var randomNo = 0;
        $("#randomNum").text(0); //Insert 0 for new game 

        var greenNum = 0
        var redNum = 0
        var blueNum = 0
        var diamondNum = 0
        game() // run game function -- defined below 
    }


    // Defines "SCORE" - verify win vs loss based on total score for player 
    function score() {
        if (totalScore === numRandom) {
            alert("You win!! Nice work!!");
            wins++;
            restart();
        }
        if (totalScore > numRandom) {
            alert("You lose, try again SUCKA!!");
            loses++;
            restart();
        }
    }

    // Defines "GAME" function" creates random # and random values for gems 
    function game() {
        //Creates random number for game 
        var randomNo = Math.ceil(Math.random() * 50) + 20; // Random # between 20 and 50 
        numRandom = randomNo; //create local variable 
        $("#randomNum").text(numRandom); //Query html insert the Random # selected 
        console.log(numRandom);


        // Variablesd to create random number locally for each gem
        var greenNum = Math.floor(Math.random() * 9 + 1); // Random # between 1 and 9
        var redNum = Math.floor(Math.random() * 9 + 1); // Random # between 1 and 9
        var blueNum = Math.floor(Math.random() * 9 + 1); // Random # between 1 and 9
        var diamondNum = Math.floor(Math.random() * 9 + 1); // Random # between 1 and 9


        $("#winsScore").text(wins); // Insert wins 
        $("#losesScore").text(loses); // Insert loses 


        // "Green Gem"
        $("#green").on("click", function() {
            totalScore = totalScore + greenNum;
            console.log("green number is: " + greenNum);
            console.log("User total: " + totalScore);
            $("#totalScore").text(totalScore);
            score();
        })

        // "Red Gem"
        $("#red").on("click", function() {
            totalScore = totalScore + redNum;
            console.log("red number is: " + redNum);
            console.log("User total: " + totalScore);
            $("#totalScore").text(totalScore);
            score();
        })

        // "Blue Gem"
        $("#blue").on("click", function() {
            totalScore = totalScore + blueNum;
            console.log("blue number is: " + blueNum);
            console.log("User total: " + totalScore);
            $("#totalScore").text(totalScore);
            score();
        })

        // "Diamond"
        $("#diamond").on("click", function() {
            totalScore = totalScore + diamondNum;
            console.log("diamond number is: " + diamondNum);
            console.log("User total: " + totalScore);
            $("#totalScore").text(totalScore);
            score();
        })


    }

    game()
});