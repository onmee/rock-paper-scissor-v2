
const GAME_CHOICES = ['rock', 'paper', 'scissor'];
const scores =  {Player: 0, Computer: 0, Result: ''};

// Randomly returns 'Rock', 'Paper' or 'Scissor' for the computer.
function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * GAME_CHOICES.length);
  return GAME_CHOICES[computerChoice];
}

// Event listener for each of the choice buttons.
const choiceBtns = document.querySelectorAll(".choice-btns button");
choiceBtns.forEach((btn => btn.addEventListener('click', btn => {
  let playerChoice = btn.target.textContent.toLowerCase();
  playRound(playerChoice, getComputerChoice());

  // Update the text and values for the 'Result' and Score cards respectively.
  const resultOutput = document.getElementById('result-output');
  resultOutput.textContent = scores.Result;

  const playerScore = document.getElementById('player-score');
  playerScore.textContent = `${scores.Player}`;

  const computerScore = document.getElementById('computer-score');
  computerScore.textContent = `${scores.Computer}`;

  runGame();
  
})))


// Run the game until 5 rounds and then display the relevant message, alongside a reset button.

function runGame() {
  if (scores.Player == 5) {
    const winMessage = document.getElementById('winner');
    winMessage.textContent = 'Congratulations! \u{1F91D} You\'ve won!! \u{1F947}';
  }
  else if (scores.Computer == 5) {
    const winMessage = document.getElementById('winner');
    winMessage.textContent = 'Commiserations. You\'ve lost \u{1F641}';
  }
  return
}

// Plays one round of the game, check the outcome, return the outcome text and scores in array.
// Replayed if both players have the same choice, as only wins are counted.
function playRound(player, computer) {

  // Update the text in the 'Computer' card.
  const compOutput = document.getElementById('computer-choice');
  compOutput.textContent = computer.toUpperCase();

  if (player == computer) {
    // Alert dialog box delayed by 2s so that computer card is updated first. 
    setTimeout(function() {alert(`Both chose ${computer}, replay round`);}, 2);
    return;
  }
  else if (computer == 'rock' && player == 'scissor') {
    ++ scores.Computer; scores.Result = 'Rock beats scissor. Computer wins!';
    return 
  }
  else if (computer == 'rock' && player == 'paper') {
    ++ scores.Player; scores.Result = 'Paper beats rock. You win!!';
  }
  else if (computer == 'scissor' && player == 'rock') {
    ++ scores.Player; scores.Result = 'Rock beats scissor. You win!!';
  }
  else if (computer == 'scissor' && player == 'paper') {
    ++ scores.Computer; scores.Result = 'Scissor beats paper. Computer wins!';
  }
  else if (computer == 'paper' &&  player == 'scissor') {
    ++ scores.Player; scores.Result = 'Scissor beats paper. You win!!';
  }
  else if (computer == 'paper' &&  player == 'rock') {
    ++ scores.Computer; scores.Result = 'Paper beats rock. Computer wins!';
  }
}