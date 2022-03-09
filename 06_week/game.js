const player = document.getElementById("player");
document.addEventListener("keydown", function (event) {
  movementFunction(event.key);
});

function movementFunction(key) {
  let oldTop = parseInt(player.style.top);
  let oldBot = parseInt(player.style.bottom);
  let oldRight =parseInt(player.style.right);
  let oldLeft = parseInt(player.style.left);
  switch (key) {
    case "ArrowUp":
        if(oldBot>=0 && oldBot<=500){
            player.style.bottom = `${oldBot + 10}px`
      break;
        }
    case "ArrowLeft":
        if(oldRight>=0 && oldRight<=500){
            player.style.right = `${oldRight + 10}px`
     }
      break;
    case "ArrowDown":
        if(oldTop>=0 && oldTop<=500){
            player.style.top = `${oldTop + 10}px`
     }
      break;
    case "ArrowRight":
        if(oldLeft>=0 && oldLeft<=500){
            player.style.left = `${oldLeft + 10}px`
     }
      break;
        default:
      console.log("Input is not valid")
  }
}
