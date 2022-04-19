import Player from './Player.js'
import Monster from './Monster.js'

const gameContainer = document.getElementById('game-container')

const player = new Player(gameContainer);
document.addEventListener("keydown",(eventKeydown) => {
  if (eventKeydown.code === "ArrowDown") {
    player.moveDown()
  }
  if (eventKeydown.code === "ArrowLeft") {
    player.moveLeft()
  }
  if (eventKeydown.code === "ArrowRight") {
    player.moveRight()
  }
  if (eventKeydown.code === "ArrowUp") {
    player.moveUp()
  }
})

let numberOfMonsters = Math.floor(Math.random()*15+5);
const monsterList = [];
for (let i = 0; i < numberOfMonsters; i++) {
  let monsterPosX = Math.floor(Math.random() * 900);
  let monsterPosY = Math.floor(Math.random() * 400);
  const monster = new Monster(gameContainer,monsterPosX,monsterPosY);
  monsterList.push(monster);
}

const monsterMovement = setInterval(function () {
  for (let i = 0; i < monsterList.length; i++) {
    const monster = monsterList[i];
    moveMonster(monster);
  }

}, 100)
function moveMonster(myMonster) {
  const movement = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown']
  const randomIndex = Math.floor(Math.random() * movement.length);
  const randomMove = movement[randomIndex];

  if (randomMove === "ArrowDown") {
    myMonster.moveDown()
  }
  if (randomMove === "ArrowLeft") {
    myMonster.moveLeft()
  }
  if (randomMove === "ArrowRight") {
    myMonster.moveRight()
  }
  if (randomMove === "ArrowUp") {
    myMonster.moveUp()
  }
}