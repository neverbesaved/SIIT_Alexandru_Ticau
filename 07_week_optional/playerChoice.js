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

rockHTML.addEventListener("click", () => {
    const computerChoice2 = computerChoice();   // Am facut astra pentru ca am doua functii care folosesc aceasta functie , de fiecare data valorile fiind diferite
  displayChoice("Rock", playerPlayground);
  displayChoice(computerChoice2, computerPlayground);
  gameResult.appendChild(winnerAnnouncer(computerChoice2, "Rock"));
});
paperHTML.addEventListener("click", () => {
    const computerChoice2 = computerChoice();
  displayChoice("Paper", playerPlayground);
  displayChoice(computerChoice2, computerPlayground);
  gameResult.appendChild(winnerAnnouncer(computerChoice2, "Paper"));
});
scissorsHTML.addEventListener("click", () => {
    const computerChoice2 = computerChoice();
  displayChoice("Scissors", playerPlayground);
  displayChoice(computerChoice2, computerPlayground);
  gameResult.appendChild(winnerAnnouncer(computerChoice2, "Scissors"));
});
