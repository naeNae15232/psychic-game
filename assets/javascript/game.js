
// computer generated choices
var psychicChoice = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//other global variables
var playerChoice = "";
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var lettersGuessed = [];
// var thisGuess = [];


// random letter selected by the "psychic"
var psychicGuess = psychicChoice[Math.floor(Math.random() * psychicChoice.length)];
console.log("THIS IS THE PSYCHIC'S GUESS: ", psychicGuess);

// document.getElementById('playerGuess').innerHTML = playerChoice;
//lettersGuessed.push(playerChoice);


//Sets the stats for each new round of guesses
function newGuess() {
    playerChoice = "";
    lettersGuessed = [];
    guessesLeft = 10;
    psychicGuess = psychicChoice[Math.floor(Math.random() * psychicChoice.length)];
    document.getElementById('playerGuess').innerHTML = lettersGuessed.join(" , ");
    // lettersGuessed.push(playerChoice);

    console.log(psychicGuess);
};



//logs the players input and updates the score
document.onkeydown = function (event) {
    var playerChoice = event.key;

    console.log("Line 36 Player's guess", playerChoice);


    if (guessesLeft > 0) {

        if (playerChoice == psychicGuess) {
            alert("Are you really a psychic?");
            document.getElementById('wins').innerHTML = (wins);
            (wins += 1);
           // playerChoice = [];
           // lettersGuessed = [];
           // guessesLeft = 10;
           // psychicGuess = psychicChoice[Math.floor(Math.random() * psychicChoice.length)];
            newGuess();
            console.log(psychicGuess);
        }

        if (playerChoice != psychicChoice) {
            console.log(lettersGuessed);

            console.log("LINE 60 BEFORE JOIN", lettersGuessed)

            guessesLeft--;
            document.getElementById('guessLeft').innerHTML = guessesLeft;
            lettersGuessed.push(playerChoice);
            joinedArray = lettersGuessed.join(',');
            document.getElementById('playerGuess').innerHTML = joinedArray;
            console.log("TEST JOIN", joinedArray);
        }

        // document.getElementById('playerGuess').innerHTML = lettersGuessed.join();

        //TRY USING ELSE!!!!
        if (guessesLeft === 0) {
            alert("You Lose");
            losses += 1;
            document.getElementById('losses').innerHTML = losses;
           
            // playerChoice = [];
           // lettersGuessed = [];
           // guessesLeft = 10;
           // psychicGuess = psychicChoice[Math.floor(Math.random() * psychicChoice.length)];
           // document.getElementById('guessLeft').innerHTML = (guessesLeft);
           // document.getElementById('playerGuess').innerHTML = lettersGuessed.join(" , ");
           
            newGuess();
            console.log(psychicGuess);
        }


       // playerChoice.push(thisGuess);
        document.getElementById('playerGuess').innerHTML = (playerChoice);
        // console.log(playerChoice);

        // document.getElementById('playerGuess').innerHTML = lettersGuessed.join(" , ");
    }
    
};




    //fix if/else statement so that the wins are in 1 if and the losses/incorrect guesses are
    //  if (guessesLeft > 0) {
    //     if (playerChoice == psychicChoice) {
    //         wins++;
    //     }
    //     else if (playerChoice !== psychicChoice) {
    //         guessesLeft--;
    //         document.getElementById('guessLeft').innerHTML = (guessesLeft);
    //     }
    //     console.log(guessesLeft);

    //    if (playerChoice == psychicGuess) {
    //       alert("You really are psychic!!!!");
    //        document.getElementById('wins').innerHTML = (wins);
    //        (wins += 1);
    //       psychicGuess="";
    //         newGuess();
    //    }
    //   else if (guessesLeft === 0) {
    //       alert("You lose");
    //         document.getElementById('losses').innerHTML = (losses);
    //        (losses += 1);
    //      psychicGuess="";
    //       newGuess();
    //    }
    // }
    //  console.log(playerChoice);



    //allows the guesses to be counted down until it reaches 0
    //for (i = 0; i < physicChoice.length; i++) {
    //  document.getElementById('playerGuess').innerHTML = lettersGuessed.join(" , ");
    //  console.log(playerChoice);
    // }

