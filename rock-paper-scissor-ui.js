
const GAME_CHOICES = ['rock', 'paper', 'scissor'];

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
})))


// Plays one round of the game, check the outcome, return the outcome text and scores in array.
// Choices must be renewed every round; so the choice functions are the parameters here.
// Replayed if both players have the same choice, as only wins are counted.
function playRound(player, computer) {
    console.log(player, computer)
    if (computer == player) {
      alert(`Both chose ${computer}, replay round`);
      return;
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