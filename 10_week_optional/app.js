import { Hangman } from "./Hangman.js";

const tryButton = document.getElementById("try-button");
const charInput = document.getElementById("char-input");

let myHangman = new Hangman();
console.log(myHangman);
displayHangman();

function displayHangman(){
    let hangmanContainer = document.getElementById("hangman-container");
    hangmanContainer.innerHTML = "<h2>"+myHangman.hidedWord.join('')+"</h2>"
}
function hangmanGame(input){
    if(typeof input ==="string" && input.length==1){
        myHangman.guessChar(input);
        displayHangman()
    } else {
        console.log("The typed value is invalid")
    }
}
tryButton.addEventListener("click", () => {
    hangmanGame(charInput.value);
})