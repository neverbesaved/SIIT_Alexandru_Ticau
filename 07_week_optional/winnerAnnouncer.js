

const computerPlayground = document.getElementById("computer-window");
const playerPlayground = document.getElementById("player-window");

const winnerAnnouncer = (computer, player) => {
  let result = "";
  const paragraphHTML = document.createElement("p");
  paragraphHTML.setAttribute("id","announcer")
  if (computer === player) {
    result = "It's a Draw !";
    paragraphHTML.setAttribute("class","draw")
  } else if (computer === "Paper" && player === "Scissors") {
    result = "Player wins !";
    paragraphHTML.setAttribute("class","win")
  } else if (computer === "Paper" && player === "Rock") {
    result = "Computer wins !";
    paragraphHTML.setAttribute("class","lose")
  } else if (computer === "Rock" && player === "Paper") {
    result = "Player wins !";
    paragraphHTML.setAttribute("class","win")
  } else if (computer === "Rock" && player === "Scissors") {
    result = "Computer wins !";
    paragraphHTML.setAttribute("class","lose")
  } else if (computer === "Scissors" && player === "Paper") {
    result = "Computer wins !";
    paragraphHTML.setAttribute("class","lose")
  } else if (computer === "Scissors" && player === "Rock") {
    result = "Player wins !";
    paragraphHTML.setAttribute("class","win")
  }
  paragraphHTML.innerText = result;
  return paragraphHTML
};

export default winnerAnnouncer;
