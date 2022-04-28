import {
  displayFox,
  displayRickMorty,
  displayDog,
  cleanContainer,
} from "./dom.js";

const selectButton = document.getElementById("select-button");

function submitChoice() {
  let option = document.getElementById("server-call");
  let myOption = option.value;
  switch (myOption) {
    case "Fox":
      cleanContainer();
      displayFox("https://randomfox.ca/floof/");
      break;
    case "Dog":
      cleanContainer();
      displayDog("https://random.dog/woof.json");
      break;
    case "Rick-and-Morty":
      cleanContainer();
      displayRickMorty("https://rickandmortyapi.com/api");
      break;
    default:
      console.log("Something didn't go quite as planned");
      break;
  }
}
selectButton.addEventListener("click", submitChoice);
