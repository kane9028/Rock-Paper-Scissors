// Confirm with the user to start the game
let confirmGamePlay = confirm("Would you like to play a game - Rock! Paper! Scissors! ?");
//     YES-start the game
//     NO-Quit the game
if(confirmGamePlay){
    game();//rename function to game according to requirement to run playRound() 5 times
} else {
    alert("See you!")
}

function playRound() {
// Once the game starts, prompt the user to type in rock/paper/scissors
    let playerSelection = prompt("Please input your selection from rock/paper/scissors: ");
    // if the user's input is invalid, push an error message and ask the user to input the selection again
    let selections = ["rock", "paper", "scissors"];
    while (checkValidation(playerSelection.toLowerCase(), selections) === false) {
        playerSelection = prompt(`Your input, ${playerSelection}, is invalid. Please input your selection from rock/paper/scissors: `);
    } 
    // Once user inputs valid selection, let the computer generate a random selection from rock/paper/scissor
    let computerSelection = computerPlay();
    // Compare user's selection with computer's selection to get the result and alert user with result 
    let result = playerWon(playerSelection.toLowerCase(),computerSelection);
    result ? alert(`Your selection: ${playerSelection}\nComputer's selection: ${computerSelection}\nCongraduation! You won this round!`) : alert(`Your selection: ${playerSelection}\nComputer's selection: ${computerSelection}\nUnfortunatly, You lost this round.`);
    // Return the result
    return result;
}

function game() {
    // store each single round result into local memory
    let result = {};
    // Repeat playround until 5 rounds game are completed, store result to local memory
    for(let i=0; i<5; i++){
        alert(`Round ${i+1} of 5!`);
        if(playRound()){
            result.playerWonCount ? result.playerWonCount += 1 : result.playerWonCount = 1;
        } else {
            result.computerWenCount ? result.computerWenCount +=1 : result.computerWenCount = 1;
        }
    }
    // Alert user with the final result and quit the game
    alert(`After 5 round of gameplay, you have won ${result.playerWonCount} times, computer have won ${result.computerWenCount} times.`);
    if( result.playerWonCount > result.computerWenCount ) alert(`Congraduation! You are the Final Winner!`);
    if( result.playerWonCount < result.computerWenCount ) alert(`Sadly, You are the Final loser.`);
    if( result.playerWonCount === result.computerWenCount ) alert(`Unbelievable! You made Five draw in a roll.`);

}

//declare a function to generate a random selection 
function computerPlay() {
    let selections = ["rock", "paper", "scissors"];// selection pool
    let randomNum = Math.floor(Math.random()*3); // generate random num between 0-2
    return selections[randomNum];// return computer's selection
}

//check validation of input
function checkValidation(inputStr, arrOfValidation) {
    return arrOfValidation.indexOf(inputStr) === -1 ? false : true;
}

//To check if player won in single round
function playerWon(playerSelection, computerSelection) {
    return (playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "rock");
}