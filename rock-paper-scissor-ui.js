
const GAME_CHOICES = ['rock', 'paper', 'scissor'];
const scores =  {Player: 0, Computer: 0};

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
  console.log(scores)
})))


// Plays one round of the game, check the outcome, return the outcome text and scores in array.
// Replayed if both players have the same choice, as only wins are counted.
function playRound(player, computer) {
  console.log(player, computer)
  if (player == computer) {
    alert(`Both chose ${computer}, replay round`);
    return;
  }
  else if (computer == 'rock' && player == 'scissor') {
    ++ scores.Computer;
    return "Computer won as rock beats scissor"
  }
  else if (computer == 'rock' && player == 'paper') {
    ++ scores.Player;
    return "You win as paper beats rock";
  }
  else if (computer == 'scissor' && player == 'rock') {
    ++ scores.Player;
    return "You win as rock beats scissor";
  }
  else if (computer == 'scissor' && player == 'paper') {
    ++ scores.Computer;
    return "Computer won as scissor beats paper";
  }
  else if (computer == 'paper' &&  player == 'scissor') {
    ++ scores.Player;
    return "You won as scissor beats paper";
  }
  else if (computer == 'paper' &&  player == 'rock') {
    ++ scores.Computer;
    return "Computer won as paper beats rock";
  }
}