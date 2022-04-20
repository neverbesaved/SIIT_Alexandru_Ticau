import Player from "./Player.js";
import Monster from "./Monster.js";

const monsterList = [];
const gameContainer = document.getElementById("game-container");
const restartButton = document.getElementById("restart-button");
const hearts = document.getElementsByClassName("fa-heart");
// heartsArray l-am pus cu let fiindca la restartul jocului il actualizez
let heartsArray = Array.from(hearts);
// isOver o voi folosi mai jos la restart si lose life
let isOver = false;

createMonsters();
const player = new Player(gameContainer);
// toate astea la fel sunt cu let fiindca le actualizez la restart 
let playerHTML = document.getElementById("player");
let monsters = document.getElementsByClassName("monster");
let monsterArray = Array.from(monsters);
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
    // linia de mai jos actualizeaza la fiecare interval pozitia la player (imi dadea bug la restart), asta a fost unicul fix gasit :D
    playerHTML = document.getElementById("player");
  });
  if(!isOver){
  isConjuring(monsterArray, playerHTML);
}
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

function isConjuring(monsters, player) {
  let playerPosX = parseInt(player.style.left);
  let playerPosY = parseInt(player.style.top);
  monsters.forEach((monster) => {
    let monsterPosX = parseInt(monster.style.left);
    let monsterPosY = parseInt(monster.style.top);
    if (
      playerPosX < monsterPosX + 40 &&
      playerPosX + 25 > monsterPosX &&
      playerPosY < monsterPosY + 40 &&
      25 + playerPosY > monsterPosY
    ) {
      loseHeart();
    }
  });
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
      //  Daca exista o varianta mai buna de a innoi event listener-ul dupa ce stergem si adaugam din nou elementul , as fi bucuros
      // sa o stiu :D , e repetitiv codul si nu-mi place nici mie :)
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
    // introduc inapoi vietile pierdute si le afisez in DOM 
    heartsArray = Array.from(hearts);
    heartsArray.forEach((heart) => {
      heart.classList.remove("hidden");
    });
    const gameOverText = document.getElementById("game-over");
    gameOverText.remove();
    createMonsters();
    // actualizez informatia despre monstri , odata ce s-au spawnat monstri diferiti , datele din array-ul de mai sus nu ar mai fi valide
    monsters = document.getElementsByClassName("monster");
    monsterArray = Array.from(monsters);
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
    // it's a feature :)
    alert("The game is not over yet");
  }
});
