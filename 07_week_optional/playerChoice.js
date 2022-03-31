import {playerPlayground,displayChoice } from "./domManipulating.js"

const rockHTML = document.getElementById("rock")
const paperHTML = document.getElementById("paper")
const scissorsHTML = document.getElementById("scissors")

rockHTML.addEventListener("click", () => {
    displayChoice('Rock',playerPlayground)
})
paperHTML.addEventListener("click", () => {
    displayChoice('Paper',playerPlayground)
})
scissorsHTML.addEventListener("click", () => {
    displayChoice('Scissors',playerPlayground)
})