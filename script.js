// store the game data
const scoreData = {
    playerWonCount : 0,
    computerWonCount : 0,
    drawGame : 0,
    roundCount : 0
};


// when player click a button, run a single round game and update the result
const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector(".paper");
const sciccorsBtn = document.querySelector(".scissors");
const restartBtn = document.querySelector('.restart');
rockBtn.addEventListener("click", singleRound);
paperBtn.addEventListener("click", singleRound);
sciccorsBtn.addEventListener("click", singleRound);
restartBtn.addEventListener("click", restartGame);

function singleRound(e) {
    if(scoreData.playerWonCount !== 5 && scoreData.computerWonCount !== 5) {
        scoreData.roundCount += 1;

        let playerSelection = e.target.className;
        // let the computer generate a random selection from rock/paper/scissor
        let computerSelection = computerPlay();
        // Compare user's selection with computer's selection to get the result and update score data
        let result = compareResult(playerSelection,computerSelection);
        if(result === "won") scoreData.playerWonCount += 1;
        if(result === "lost") scoreData.computerWonCount += 1;
        if(result === "draw") scoreData.drawGame += 1;
        //update score each time when player click button
        updateScore();
        
        //push result info of each round to log
        pushTolog(playerSelection, computerSelection, result, scoreData.roundCount);
    }
    // push result message to the page once either reached 5 wons
    if(scoreData.playerWonCount === 5) resultMessage("Player");
    if(scoreData.computerWonCount === 5) resultMessage("Computer");
}

function updateScore() {
    const playerScore = document.querySelector("#player>.score");
    const computerScore = document.querySelector("#computer>.score");
    const draw = document.querySelector("#draw>.score");
    playerScore.textContent = scoreData.playerWonCount;
    computerScore.textContent = scoreData.computerWonCount;
    draw.textContent = scoreData.drawGame;
}

function resultMessage(str) {
    const result = document.querySelector("#resultMessage");
    result.textContent = `${str} Won.`;
}

//declare a function to generate a random selection 
function computerPlay() {
    let selections = ["rock", "paper", "scissors"];// selection pool
    let randomNum = Math.floor(Math.random()*3); // generate random num between 0-2
    return selections[randomNum];// return computer's selection
}

//To check if player won in single round
function compareResult(playerSelection, computerSelection) {
    if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "rock")) {
        return "won";
    } else if (playerSelection === computerSelection) {
        return "draw"
    } else {
        return "lost"
    }
}

function pushTolog(playerSelection, computerSelection, singleResult, round) {
    const log = document.querySelector("#log");
    const logInfo = document.createElement("div");
    logInfo.classList.add("logInfo");
    logInfo.textContent = `Round ${round}: You selected ${playerSelection}, Computer selected ${computerSelection}.\n`; 
    if (singleResult === "draw") { 
        const text = document.createTextNode(`It's a ${singleResult}.`);
        logInfo.appendChild(text);
    } else {
        const text = document.createTextNode(`You ${singleResult}`);
        logInfo.appendChild(text);
    }
    log.appendChild(logInfo);
}

function restartGame() {
    scoreData.playerWonCount = 0;
    scoreData.computerWonCount = 0;
    scoreData.drawGame = 0;
    scoreData.roundCount = 0;
    updateScore();
    //reset the log
    const log = document.querySelector("#log");
    log.textContent = "Result log:"
}