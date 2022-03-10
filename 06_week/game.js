const player = document.getElementById("player");
document.addEventListener("keydown", function (event) {
  movementFunction(event.key);
});

function movementFunction(key) {
  let oldTop = parseInt(player.style.top);
  let oldBot = parseInt(player.style.bottom);
  let oldRight = parseInt(player.style.right);
  let oldLeft = parseInt(player.style.left);
  switch (key) {
    case "ArrowUp":
      if(oldTop!==0 && oldBot!==0){
        player.style.bottom = `${oldBot + 5}px`;
        player.style.top = `${oldTop - 5}px`;
        break;
      }
    case "ArrowLeft": 
    if(oldRight!==0 && oldLeft!==0){
      player.style.right = `${oldRight +   5}px`;
      player.style.left = `${oldLeft - 5}px`;
      break;
    }
    case "ArrowDown":
      if(oldTop<475 && oldBot>-475){
      player.style.top = `${oldTop + 5}px`;
      player.style.bottom = `${oldBot - 5}px`;
      break;
    }
    case "ArrowRight":
      if(oldRight>-975 && oldLeft<975){
      player.style.left = `${oldLeft + 5}px`;
      player.style.right = `${oldRight - 5}px`;
      break;
  }
    default:
      console.log("Input is not valid");
  }
}
