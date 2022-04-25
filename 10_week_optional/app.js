import { Hangman } from "./Hangman.js";

const tryButton = document.getElementById("try-button");
const charInput = document.getElementById("char-input");
const hearts = document.getElementsByClassName("fa-heart");
const hangmanContainer = document.getElementById("hangman-container");
let heartsArray = Array.from(hearts);

let myHangman = new Hangman();
console.log(myHangman);
displayHangman();

function loseHeart() {
  heartsArray[heartsArray.length - 1].classList.add("hidden");
  heartsArray.pop();
  if (heartsArray.length === 0) {
    gameOver();
  }
}
function resetHearts() {
  heartsArray = Array.from(hearts);
  heartsArray.forEach((heart) => {
    heart.classList.remove("hidden");
  });
}
function createRestartButton() {
  const restartButton = document.createElement("button");
  restartButton.setAttribute("id", "restart-button");
  restartButton.innerText = "Restart";
  hangmanContainer.appendChild(restartButton);
  restartButton.addEventListener("click", () => {
    resetHearts();
    myHangman = new Hangman();
    console.log(myHangman);
    displayHangman();
  });
}
function gameWin() {
  const gameWinText = document.createElement("h1");
  gameWinText.innerText = "Congratulations!";
  gameWinText.setAttribute("id", "game-win");
  hangmanContainer.innerHTML = "";
  hangmanContainer.appendChild(gameWinText);
  createRestartButton();
}
function gameOver() {
  const gameOverText = document.createElement("h1");
  gameOverText.innerText = "Game Over!";
  gameOverText.setAttribute("id", "game-over");
  hangmanContainer.innerHTML = "";
  hangmanContainer.appendChild(gameOverText);
  createRestartButton();
}
function displayHangman() {
  hangmanContainer.innerHTML = "<h2>" + myHangman.hiddenWord.join("") + "</h2>";
}
function hangmanGame(input) {
  if (typeof input === "string" && input.length == 1) {
    let isWrongAnswer = myHangman.guessChar(input);
    displayHangman();
    if (isWrongAnswer) {
      loseHeart();
    }
  } else {
    alert("Input can't be empty");
  }
}
tryButton.addEventListener("click", () => {
  hangmanGame(charInput.value);
  if(myHangman.word == myHangman.hiddenWord.join("")){
      gameWin();
  }
});
