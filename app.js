let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("p1-score");
const computerScore_span = document.getElementById("pc-score");
const scoreboard_div = document.querySelector(".scoreboard");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convertToWord(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  return "Scissors";
}

function win(userChoice, computerChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `You chose ${convertToWord(
    userChoice
  )} and the PC chose ${convertToWord(computerChoice)}, you win!`;
  document.getElementById(userChoice).classList.add("green_background");
  document.getElementById(userChoice).classList.add("green_background:hover");
  setTimeout(function () {
    document.getElementById(userChoice).classList.remove("green_background");
  }, 1000);
  setTimeout(function () {
    document
      .getElementById(userChoice)
      .classList.remove("green_background:hover");
  }, 1000);
}
function lose(userChoice, computerChoice) {
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `You chose ${convertToWord(
    userChoice
  )} and the PC chose ${convertToWord(computerChoice)}, you lose!`;
  document.getElementById(userChoice).classList.add("red_background");
  document.getElementById(userChoice).classList.add("red_background:hover");
  setTimeout(function () {
    document.getElementById(userChoice).classList.remove("red_background");
  }, 1000);
  setTimeout(function () {
    document
      .getElementById(userChoice)
      .classList.remove("red_background:hover");
  }, 1000);
}
function draw(userChoice, computerChoice) {
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `You chose ${convertToWord(
    userChoice
  )} and the PC chose ${convertToWord(computerChoice)}, so its a draw!`;
  document.getElementById(userChoice).classList.add("grey_background");
  document.getElementById(userChoice).classList.add("grey_background:hover");
  setTimeout(function () {
    document.getElementById(userChoice).classList.remove("grey_background");
  }, 1000);
  setTimeout(function () {
    document
      .getElementById(userChoice)
      .classList.remove("grey_background:hover");
  }, 1000);
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      break;
  }
}

function main() {
  rock_div.addEventListener("click", function () {
    game("r");
  });
  paper_div.addEventListener("click", function () {
    game("p");
  });
  scissors_div.addEventListener("click", function () {
    game("s");
  });
}

main();
