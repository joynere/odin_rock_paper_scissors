function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function computerPlay() {
    switch(getRandomInt(0, 3)) {
        case 0:
            return 'Rock';
        case 1:
            return 'Paper';
        case 2:
            return 'Scissors';
    }
}

function playOneRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    let playerWins = (playerSelection == "rock" && computerSelection == "paper") || (playerSelection == "paper" && computerSelection == "scissors") || (playerSelection == "scissors" && computerSelection == "rock");

    if(playerWins)
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    else if(playerSelection == computerSelection)
        return "It's a draw";
    else
        return `You win! ${playerSelection} beats ${computerSelection}`;
}

function game() {
    let playerWinCount = 0;
    let draws = 0;
    const roundsToPlay = 5

    for (let i = 0; i < roundsToPlay; i++) {
        let result = playOneRound(prompt("Pick either Rock, Paper, or Scissors!"), computerPlay());
        console.log(result);

        if(result.includes("You win"))
            playerWinCount++;
        else if(result.includes("draw"))
            draws++;
    }
    
    // if the player won more often than he lost
    if((roundsToPlay - playerWinCount) < playerWinCount)
        console.log(`You won with a score of ${playerWinCount}!`);
    else if((roundsToPlay - draws - playerWinCount) == playerWinCount)
        console.log(`Both players won the same amount of rounds so it's a draw!`);
    else
        console.log(`The Computer won with a score of ${roundsToPlay - draws - playerWinCount}`);
}

let playerScore = 0;
let computerScore = 0;

function playerAction(button) {
    //                                  remove  last 4 characters ("-btn") at the end of the button id
    let result = playOneRound(button.id.slice(0, -4), computerPlay());
    document.querySelector('#result').textContent = result;
    if(result.includes("You win")) {
        playerScore++;
        redrawScore();
    }
    else if(result.includes("You lose")) {
        computerScore++;
        redrawScore();
    }  
}

function redrawScore() {
    document.querySelector('#score').textContent = `${playerScore} : ${computerScore}`;
}


//             
const buttons = document.querySelectorAll('#buttons button');                                                                        
buttons.forEach(button => button.addEventListener('click', () => playerAction(button)));

