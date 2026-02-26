const buttons = document.querySelectorAll("button");
const result = document.getElementById("result");
const userScoreText = document.getElementById("user-score");
const computerScoreText = document.getElementById("computer-score");

let userScore = 0;
let computerScore = 0;
buttons.forEach(button => {
  button.addEventListener("click", () => {
    let userChoice = button.id;
    let computerChoice = computerChoiceFunc();
    let winner = checkWinner(userChoice, computerChoice);
    result.textContent = winner;
  });
});

function computerChoiceFunc() {
  let options = ["rock", "paper", "scissors"];
  let random = Math.floor(Math.random() * 3);
  return options[random];
}

function checkWinner(user, computer) {
  if (user === computer) {
    return "Tie!";
  }
  if (
    (user === "rock" && computer === "scissors") ||
    (user === "paper" && computer === "rock") ||
    (user === "scissors" && computer === "paper")
  ) {
    userScore++;
    userScoreText.textContent = userScore;
    return "You Win!";
  }
  computerScore++;
  computerScoreText.textContent = computerScore;
  return "You Lose!";
}