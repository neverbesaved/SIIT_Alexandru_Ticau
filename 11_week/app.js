import Player from './Player.js'
import Monster from './Monster.js'

const gameContainer = document.getElementById('game-container')

const player = new Player(gameContainer);
document.addEventListener("keydown", function (eventKeydown) {
  if (eventKeydown.code === "ArrowDown") {
    // console.log("keydown", eventKeydown)
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
// let numberOfObstacles = Math.floor(Math.random() * 30 + 10);
// console.log(numberOfObstacles);
// for (i = 0; i < numberOfObstacles; i++) {
//   createObstacles();
// }

// // 3. cream numar random de obstacole , cu pozitii si dimensiuni random si le introducem pe playground
// function createObstacles() {
//   let width = Math.floor(Math.random() * 70 + 10);
//   let height = Math.floor(Math.random() * 70 + 10);
//   let obstaclePosX = Math.floor(Math.random() * 980);
//   let obstaclePosY = Math.floor(Math.random() * 480);

//   let obstacle = document.createElement("div");
//   obstacle.setAttribute("class", "obstacle");
//   obstacle.style.left = `${obstaclePosX}px`;
//   obstacle.style.top = `${obstaclePosY}px`;
//   obstacle.style.width = `${width}px`;
//   obstacle.style.height = `${height}px`;
let numberOfMonsters = Math.floor(Math.random()*15+5)
console.log(numberOfMonsters)
const monsterList = []
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