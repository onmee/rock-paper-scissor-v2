
const GAME_CHOICES = ['rock', 'paper', 'scissor'];

// Randomly returns 'Rock', 'Paper' or Scissor for the computer.
function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * GAME_CHOICES.length);
  return GAME_CHOICES[computerChoice];
}

// Prompt user to choose one of the game choices.
function getPlayerChoice() {
  let playerChoice = prompt("Enter 'rock', 'paper' or 'scissor' to begin game:").toLowerCase();
  return playerChoice;
}
  
// Plays one round of the game, check the outcome, return the outcome text and scores in array.
// Choices must be renewed every round; so the choice functions are the parameters here.
// Replayed if both players have the same choice, as only wins are counted.
function playRound(player = getPlayerChoice(), computer = getComputerChoice()) {
  if (computer == player) {
    alert(`Both chose ${computer}, replay round`);
    return playRound();
  }
  else if (computer == 'rock' && player == 'scissor') {
    return ["Computer won as rock beats scissor", 1, 0]
  }
  else if (computer == 'rock' && player == 'paper') {
    return ["You win as paper beats rock", 0, 1];
  }
  else if (computer == 'scissor' && player == 'rock') {
    return ["You win as rock beats scissor", 0, 1];
  }
  else if (computer == 'scissor' && player == 'paper') {
    return ["Computer won as scissor beats paper", 1, 0];
  }
  else if (computer == 'paper' &&  player == 'scissor') {
    return ["You won as scissor beats paper", 0, 1];
  }
  else if (computer == 'paper' &&  player == 'rock') {
    return ["Computer won as paper beats rock", 1, 0];
  }
}

// Play five rounds using a for loop, after which the final outcome and scores are shown.
function game() {
  
  alert("Can you beat the computer over 5 rounds? Go ahead and try!");

  let computerScore = 0;
  let playerScore = 0;

  for (i = 1; i <= 5; i++) {
    let outcome = playRound();
    computerScore += outcome[1];
    playerScore += outcome[2];
  }

  if (computerScore > playerScore){
    console.log("Computer won the game, it scored: " + computerScore);
    console.log("You scored:" + playerScore);
  }
  else {
    console.log("You won the game!!! You scored: " + playerScore);
    console.log("Computer scored:" + computerScore);
  }
}