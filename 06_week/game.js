const player = document.getElementById("player");
const playground = document.getElementById("game-container")
var Player = {x:0,y:0};

document.addEventListener("keydown", function (event) {
  keydownListener(event.key)
});

function isPlayerInsideDiv(x,y){
  if(x<0 || playground.offsetWidth -20 < x){
    return false;
  }
  if(y<0 || playground.offsetHeight-20 < y){
    return false;
  }
  return true;
}
function keydownListener(key) {
  console.log(key)
  let x = Player.x;
  let y = Player.y;
  switch (key) {
    case "ArrowUp":
      y-=20;
      break;
    case "ArrowLeft":
      x-=20;
      break; 
    case "ArrowDown":
      y+=20;
      break;
    case "ArrowRight":
      x+=20;
      break;
    default:
      console.log("Input is not valid");
  }
  movePlayer(x,y);
}
function movePlayer(x,y){
  if(!isPlayerInsideDiv(x,y)){
    return;
  }
  Player.x=x || 0;  // Daca x are o valoare (e definit), atunci primeste valoarea lui , in caz contrar e 0
  Player.y=y || 0;

  player.style.left= `${Player.x}px`;
  player.style.top= `${Player.y}px`;
}

