// Confirm with the user to start the game
let confirmGamePlay = confirm("Would you like to play a game - Rock! Paper! Scissors! ?");
//     YES-start the game
//     NO-Quit the game
if(confirmGamePlay){
    gameStart();
} else {
    alert("See you!")
}
// Once the game starts, prompt the user to type in rock/paper/scissors
//     if the user's input is invalid, push an error message and ask the user to input the selection again
//     Once user inputs valid selection, let the computer generate a random selection from rock/paper/scissor
//     Compare user's selection with computer's selection and prompt user with result 
//     Store the single round result into memory prompt user for a new round
// Repeat steps from lines 9-12 until 5 rounds game are completed
// Prompt user with the final result and reset the game