"use Strict";

// document.querySelector(".message").textContent;
// document.querySelector(".number").textContent;
// document.querySelector(".score");
// document.querySelector(".guess").value;
// console.log(document.querySelector(".guess"));

// Generating the Secret Number
let secretNumber = Math.trunc(Math.random(1, 20) * 20) + 1;
console.log(secretNumber);

// Score
let score = 20;

// High Score
let highScore = 0;

// Adding the Click Event and function in the check btn
document.querySelector(".check").addEventListener("click", check);
document.querySelector(".again").addEventListener("click", reset);

// Check Function
function check() {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    document.querySelector(".message").textContent = "Enter Valid Number";
  } else if (guess === secretNumber) {
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector(".message").textContent = "Correct Number 😍😍 !!";
    document.querySelector("body").style.backgroundColor = "#60b345";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").style.color = "red";
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
      document.querySelector(".highscore").style.color = " red";
      document.querySelector(".highscore").style.fontSize = " 6rem";
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector(".message").textContent =
        guess > secretNumber
          ? "📈 Guess is too High !!"
          : "📉 Guess is Too low !!";

      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent =
        "🤯 You Lost The Game !!";
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "#ff2c2c";
    }
  }
}

// Reset Function
function reset() {
  score = 20;
  secretNumber = Math.trunc(Math.random(1, 20) * 20) + 1;
  console.log(secretNumber);
  document.querySelector(".score").textContent = score;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style.backgroundColor = " #222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").style.color = "#000000";
  document.querySelector(".guess").value = "";
  document.querySelector(".highscore").style.fontSize = " 6rem";
}
