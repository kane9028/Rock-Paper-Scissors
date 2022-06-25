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
    playerSelection = prompt("Please input your selection from rock/paper/scissors: ");
    // if the user's input is invalid, push an error message and ask the user to input the selection again
    let selections = ["rock", "paper", "scissors"];
    while (!checkValidation(playerSelection.toLowerCase(), selections)) {
        playerSelection = prompt(`Your input, ${playerSelection}, is invalid. Please input your selection from rock/paper/scissors: `);
    } 
    // Once user inputs valid selection, let the computer generate a random selection from rock/paper/scissor
    computerSelection = computerPlay();
    // Compare user's selection with computer's selection to get the result and alert user with result 
    let result = playerWon(playerSelection.toLowerCase(),computerSelection);
    result ? alert(`Your selection: ${playerSelection}\nComputer's selection: ${computerSelection}\nCongraduation! You won this round!`) : alert(`Your selection: ${playerSelection}\nComputer's selection: ${computerSelection}\nUnfortunatly, You lost this round.`);
    // Return the result
    return result;
}

function game() {
    // store each single round result into local memory
    // Repeat playround until 5 rounds game are completed
    // Alert user with the final result and reset the game
}

//declare a function to generate a random selection 
function computerPlay() {
    let selections = ["rock", "paper", "scissors"];// selection pool
    let randomNum = Math.floor(Math.random()*3); // generate random num between 0-2
    return selections[randomNum];// return computer's selection
}

//check validation of input
function checkValidation(inputStr, arrOfValidation) {
    arrOfValidation.indexOf(inputStr) === -1 ? false : true;
}

//To check if player won in single round
function playerWon(playerSelection, computerSelection) {
    return (playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "rock");
}