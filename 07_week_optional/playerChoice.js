import {
  playerPlayground,
  computerPlayground,
  displayChoice,
} from "./domManipulating.js";
import computerChoice from "./computerChoice.js";
import winnerAnnouncer from "./winnerAnnouncer.js";

const rockHTML = document.getElementById("rock");
const paperHTML = document.getElementById("paper");
const scissorsHTML = document.getElementById("scissors");
const gameResult = document.getElementById("game-result")

export let resetGame = false;

rockHTML.addEventListener("click", () => {
    const computerChoice2 = computerChoice();   // Am facut astra pentru ca am doua functii care folosesc aceasta functie , de fiecare data valorile fiind diferite
  displayChoice("Rock", playerPlayground);      // Din acest motiv diferă valorile afișate și rezultatul jocului.
  displayChoice(computerChoice2, computerPlayground);
  gameResult.appendChild(winnerAnnouncer(computerChoice2, "Rock").paragraphHTML);
  gameResult.appendChild(winnerAnnouncer(computerChoice2, "Rock").restartButton);
  resetGame = true; 
});
paperHTML.addEventListener("click", () => {
    const computerChoice2 = computerChoice();
  displayChoice("Paper", playerPlayground);
  displayChoice(computerChoice2, computerPlayground);
  gameResult.appendChild(winnerAnnouncer(computerChoice2, "Paper").paragraphHTML);
  gameResult.appendChild(winnerAnnouncer(computerChoice2, "Paper").restartButton);
  resetGame = true; 
});
scissorsHTML.addEventListener("click", () => {
    const computerChoice2 = computerChoice();
  displayChoice("Scissors", playerPlayground);
  displayChoice(computerChoice2, computerPlayground);
  gameResult.appendChild(winnerAnnouncer(computerChoice2, "Scissors").paragraphHTML);
  gameResult.appendChild(winnerAnnouncer(computerChoice2, "Scissors").restartButton);
  resetGame = true; 
});
