// Confirm with the user to start the game
let confirmGamePlay = confirm("Would you like to play a game - Rock! Paper! Scissors! ?");
//     YES-start the game
//     NO-Quit the game
if(confirmGamePlay){
    game();//rename function to game according to requirement to run playRound() 5 times
} else {
    alert("See you!")
}

function playRound(playerSelection, computerSelection) {
// Once the game starts, prompt the user to type in rock/paper/scissors
    // if the user's input is invalid, push an error message and ask the user to input the selection again
    // Once user inputs valid selection, let the computer generate a random selection from rock/paper/scissor
    // Compare user's selection with computer's selection to get the result and prompt user with result 
    // Return the result
}

function game() {
    // store each single round result into local memory
    // Repeat playround until 5 rounds game are completed
    // Alert user with the final result and reset the game
}

//declare a function to generate a random selection 
function computerPlay() {

}