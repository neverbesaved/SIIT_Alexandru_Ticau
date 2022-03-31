import {
  playerPlayground,
  computerPlayground,
  displayChoice,
} from "./domManipulating.js";
import { computerChoice } from "./computerChoice.js";
import winnerAnnouncer from "./winnerAnnouncer.js";

const rockHTML = document.getElementById("rock");
const paperHTML = document.getElementById("paper");
const scissorsHTML = document.getElementById("scissors");

rockHTML.addEventListener("click", () => {
  displayChoice("Rock", playerPlayground);
  displayChoice(computerChoice(), computerPlayground);
  console.log(computerChoice());
  console.log(winnerAnnouncer(computerChoice(), "Rock"));
});
paperHTML.addEventListener("click", () => {
  displayChoice("Paper", playerPlayground);
  displayChoice(computerChoice(), computerPlayground);
  console.log(computerChoice());
  console.log(winnerAnnouncer(computerChoice(), "Paper"));
});
scissorsHTML.addEventListener("click", () => {
  displayChoice("Scissors", playerPlayground);
  displayChoice(computerChoice(), computerPlayground);
  console.log(computerChoice());
  console.log(winnerAnnouncer(computerChoice(), "Scissors"));
});
