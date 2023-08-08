
const GAME_CHOICES = ['rock', 'paper', 'scissor'];
const gameData =  {playerChoice: '', Player: 0, Computer: 0, Result: ''};

// Randomly returns 'Rock', 'Paper' or 'Scissor' for the computer.
function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * GAME_CHOICES.length);
  return GAME_CHOICES[computerChoice];
}

// Event listener for each of the choice buttons.
const choiceBtns = document.querySelectorAll(".choice-btns button");
choiceBtns.forEach(btn => btn.addEventListener('click', onClick));

function onClick(btn) {
  gameData.playerChoice = btn.target.textContent.toLowerCase();
  runGame();
}


// Run the game until 5 wins and then display the relevant message, remove eventListeners and
// and show a reset button. 
function runGame() {
  playRound(gameData.playerChoice, getComputerChoice());

  if (gameData.Player == 5) {
    const winMessage = document.getElementById('winner');
    winMessage.textContent = 'Congratulations! \u{1F91D} You\'ve won!! \u{1F947}';
    choiceBtns.forEach(btn => btn.removeEventListener('click', onClick));
  }
  else if (gameData.Computer == 5) {
    const winMessage = document.getElementById('winner');
    winMessage.textContent = 'Commiserations. You\'ve lost \u{1F641}';
    choiceBtns.forEach(btn => btn.removeEventListener('click', onClick));
  }
  textOutput(); 
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
    ++ gameData.Computer; gameData.Result = 'Rock beats scissor. Computer wins!';
  }
  else if (computer == 'rock' && player == 'paper') {
    ++ gameData.Player; gameData.Result = 'Paper beats rock. You win!!';
  }
  else if (computer == 'scissor' && player == 'rock') {
    ++ gameData.Player; gameData.Result = 'Rock beats scissor. You win!!';
  }
  else if (computer == 'scissor' && player == 'paper') {
    ++ gameData.Computer; gameData.Result = 'Scissor beats paper. Computer wins!';
  }
  else if (computer == 'paper' &&  player == 'scissor') {
    ++ gameData.Player; gameData.Result = 'Scissor beats paper. You win!!';
  }
  else if (computer == 'paper' &&  player == 'rock') {
    ++ gameData.Computer; gameData.Result = 'Paper beats rock. Computer wins!';
  }
}

// Append reset button to final outcome section.

// Scores and results card text outputs.
function textOutput() {
  const resultOutput = document.getElementById('result-output');
  resultOutput.textContent = gameData.Result;

  const playerScore = document.getElementById('player-score');
  playerScore.textContent = `${gameData.Player}`;

  const computerScore = document.getElementById('computer-score');
  computerScore.textContent = `${gameData.Computer}`;
}