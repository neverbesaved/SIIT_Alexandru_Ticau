import {
  playerPlayground,
  computerPlayground,
  displayChoice,
} from "./domManipulating.js";
import computerChoice from "./computerChoice.js";
import winnerAnnouncer from "./winnerAnnouncer.js";
import restartGame from "./restartGame.js"

const rockHTML = document.getElementById("rock");
const paperHTML = document.getElementById("paper");
const scissorsHTML = document.getElementById("scissors");
const gameResult = document.getElementById("game-result")

let resetGame = false;

rockHTML.addEventListener("click", () => {
  if(resetGame === false){
    const computerChoice2 = computerChoice();   // Am facut astra pentru ca am doua functii care folosesc aceasta functie , de fiecare data valorile fiind diferite
  displayChoice("Rock", playerPlayground);      // Din acest motiv diferă valorile afișate și rezultatul jocului.
  displayChoice(computerChoice2, computerPlayground);
  gameResult.appendChild(winnerAnnouncer(computerChoice2, "Rock"));
  resetGame = !resetGame;
} else { 
    restartGame();
    const computerChoice2 = computerChoice();
  displayChoice("Rock", playerPlayground);
  displayChoice(computerChoice2, computerPlayground);
  gameResult.appendChild(winnerAnnouncer(computerChoice2, "Rock"));
    resetGame= true;
  }
});
paperHTML.addEventListener("click", () => {
  if(resetGame === false){
    const computerChoice2 = computerChoice();
  displayChoice("Paper", playerPlayground);
  displayChoice(computerChoice2, computerPlayground);
  gameResult.appendChild(winnerAnnouncer(computerChoice2, "Paper"));
  resetGame = !resetGame; 
  } else { 
    restartGame();
    const computerChoice2 = computerChoice();
  displayChoice("Paper", playerPlayground);
  displayChoice(computerChoice2, computerPlayground);
  gameResult.appendChild(winnerAnnouncer(computerChoice2, "Paper"));
    resetGame= true;
  }
});
scissorsHTML.addEventListener("click", () => {
  if(resetGame === false){
    const computerChoice2 = computerChoice();
  displayChoice("Scissors", playerPlayground);
  displayChoice(computerChoice2, computerPlayground);
  gameResult.appendChild(winnerAnnouncer(computerChoice2, "Scissors"));
  resetGame = !resetGame; 
  } else { 
    restartGame();
    const computerChoice2 = computerChoice();
  displayChoice("Scissors", playerPlayground);
  displayChoice(computerChoice2, computerPlayground);
  gameResult.appendChild(winnerAnnouncer(computerChoice2, "Scissors"));
    resetGame= true;
  }
});
