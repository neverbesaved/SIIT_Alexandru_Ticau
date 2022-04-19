import Player from "./Player.js";
import Monster from "./Monster.js";

const monsterList = [];
const gameContainer = document.getElementById("game-container");
const restartButton = document.getElementById("restart-button");
const hearts = document.getElementsByClassName("fa-heart");
let heartsArray = Array.from(hearts);

let isOver = false;

createMonsters();
const player = new Player(gameContainer);
let playerHTML = document.getElementById("player");
// loseHeart();
// loseHeart();
// loseHeart();
document.addEventListener("keydown", (eventKeydown) => {
  switch (eventKeydown.key) {
    case "ArrowDown":
      player.moveDown();
      break;
    case "ArrowLeft":
      player.moveLeft();
      break;
    case "ArrowRight":
      player.moveRight();
      break;
    case "ArrowUp":
      player.moveUp();
      break;
  }
});

function createMonsters() {
  let numberOfMonsters = Math.floor(Math.random() * 15 + 5);
  for (let i = 0; i < numberOfMonsters; i++) {
    let monsterPosX = Math.floor(Math.random() * 900);
    let monsterPosY = Math.floor(Math.random() * 400);
    const monster = new Monster(gameContainer, monsterPosX, monsterPosY);
    monsterList.push(monster);
  }
}

const monsterMovement = setInterval(() => {
  monsterList.forEach((monster) => {
    moveMonster(monster);
  });
}, 100);
function moveMonster(myMonster) {
  const movement = ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"];
  const randomIndex = Math.floor(Math.random() * movement.length);
  const randomMove = movement[randomIndex];

  if (randomMove === "ArrowDown") {
    myMonster.moveDown();
  }
  if (randomMove === "ArrowLeft") {
    myMonster.moveLeft();
  }
  if (randomMove === "ArrowRight") {
    myMonster.moveRight();
  }
  if (randomMove === "ArrowUp") {
    myMonster.moveUp();
  }
}

function loseHeart() {
  heartsArray[heartsArray.length - 1].classList.add("hidden");
  heartsArray.pop();
  if (heartsArray.length === 0) {
    gameOver();
  } else {
    playerHTML.remove();
    const player = new Player(gameContainer);
    playerHTML = document.getElementById("player");
    document.addEventListener("keydown", (eventKeydown) => {
      switch (eventKeydown.key) {
        case "ArrowDown":
          player.moveDown();
          break;
        case "ArrowLeft":
          player.moveLeft();
          break;
        case "ArrowRight":
          player.moveRight();
          break;
        case "ArrowUp":
          player.moveUp();
          break;
      }
    });
  }
}
function gameOver() {
  playerHTML.remove();
  const gameOverText = document.createElement("h1");
  gameOverText.innerText = "Game Over!";
  gameOverText.setAttribute("id", "game-over");
  gameContainer.appendChild(gameOverText);
  monsterList.splice(0, monsterList.length);
  const monsters = document.getElementsByClassName("monster");
  const monsterArray = Array.from(monsters);
  monsterArray.forEach((monster) => {
    monster.parentElement.removeChild(monster);
  });

  isOver = !isOver;
}

restartButton.addEventListener("click", () => {
  if (isOver) {
    heartsArray = Array.from(hearts);
    heartsArray.forEach((heart) => {
      heart.classList.remove("hidden");
    });
    const gameOverText = document.getElementById("game-over");
    gameOverText.remove();
    createMonsters();
    const player = new Player(gameContainer);
    document.addEventListener("keydown", (eventKeydown) => {
      switch (eventKeydown.key) {
        case "ArrowDown":
          player.moveDown();
          break;
        case "ArrowLeft":
          player.moveLeft();
          break;
        case "ArrowRight":
          player.moveRight();
          break;
        case "ArrowUp":
          player.moveUp();
          break;
      }
    });
    isOver = !isOver;
  } else {
    alert("The game is not over yet");
  }
});
