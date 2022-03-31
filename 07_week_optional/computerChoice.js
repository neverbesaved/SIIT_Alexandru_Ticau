const choiceArray = ["Rock", "Paper", "Scissors"];
import { displayChoice, computerPlayground } from "./domManipulating.js";

export const computerChoice = () => {
  let randomNum = Math.floor(Math.random() * 3);
  let result = choiceArray[randomNum];
  displayChoice(result,computerPlayground);
};
