createPlayground();

var player = document.getElementById("player");
var playground = document.getElementById("game-container");
var submitButton = document.getElementById("submit-button");
var inputs = document.getElementsByClassName("input-item");
var Player = { x: 0, y: 0 };

document.addEventListener("keydown", function (event) {
  keydownListener(event.key);
});

function createPlayground() {
  // 1. cream playground-ul
  let playground = document.createElement("div");
  playground.setAttribute("id", "game-container");

  // 2. cream playerul cu o pozitie random(?) si il adaugam in playground

  // let posX = Math.floor(Math.random() * 980);
  // let posY = Math.floor(Math.random() * 480);
  let ourPlayer = document.createElement("div");
  ourPlayer.setAttribute("id", "player");
  // ourPlayer.style.left = `${posX}px`
  // ourPlayer.style.top = `${posY}px`
  // Player.x = posX;
  // Player.y = posY;
  playground.appendChild(ourPlayer);

  document.body.appendChild(playground);
}

let numberOfObstacles = Math.floor(Math.random() * 15 + 5);
console.log(numberOfObstacles);
for (i = 0; i < numberOfObstacles; i++) {
  createObstacles();
}

// 3. cream numar random de obstacole , cu pozitii si dimensiuni random si le introducem pe playground
function createObstacles() {
  let width = Math.floor(Math.random() * 70 + 10);
  let height = Math.floor(Math.random() * 70 + 10);
  let obstaclePosX = Math.floor(Math.random() * 980);
  let obstaclePosY = Math.floor(Math.random() * 480);

  let obstacle = document.createElement("div");
  obstacle.setAttribute("class", "obstacle");
  obstacle.style.left = `${obstaclePosX}px`;
  obstacle.style.top = `${obstaclePosY}px`;
  obstacle.style.width = `${width}px`;
  obstacle.style.height = `${height}px`;
  if (isObstacleInsideDiv(obstaclePosX, obstaclePosY, height, width)) {
    playground.appendChild(obstacle);
  } else {
    console.log("Obstacle is spawning outside the playground , skipping ... ");
  }
}

function isPlayerInsideDiv(x, y) {
  if (x < 0 || playground.offsetWidth - 20 < x) {
    return false;
  }
  if (y < 0 || playground.offsetHeight - 20 < y) {
    return false;
  }
  return true;
}

function isObstacleInsideDiv(x, y, height, width) {
  if (x < 0 || playground.offsetWidth - width < x) {
    return false;
  }
  if (y < 0 || playground.offsetHeight - height < y) {
    return false;
  }
  return true;
}
function keydownListener(key) {
  console.log(key);
  let x = Player.x;
  let y = Player.y;
  switch (key) {
    case "ArrowUp":
      y -= 20;
      break;
    case "ArrowLeft":
      x -= 20;
      break;
    case "ArrowDown":
      y += 20;
      break;
    case "ArrowRight":
      x += 20;
      break;
    default:
      console.log("Input is not valid");
  }
  movePlayer(x, y);
}
function movePlayer(x, y) {
  if (!isPlayerInsideDiv(x, y)) {
    return;
  }
  Player.x = x || 0; // Daca x are o valoare (e definit), atunci primeste valoarea lui , in caz contrar e 0
  Player.y = y || 0;

  player.style.left = `${Player.x}px`;
  player.style.top = `${Player.y}px`;
}
