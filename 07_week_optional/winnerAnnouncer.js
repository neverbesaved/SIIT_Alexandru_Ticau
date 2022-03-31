const computerPlayground = document.getElementById("computer-window");
const playerPlayground = document.getElementById("player-window");


const winnerAnnouncer = (computer, player) => {
  let result = "";
  if (computer === player) {
    result = "It's a Draw !";
  } else if (computer === "Paper" && player === "Scissors") {
    result = "Player wins !";
  } else if (computer === "Paper" && player === "Rock") {
    result = "Computer wins !";
  } else if (computer === "Rock" && player === "Paper") {
    result = "Player wins !";
  } else if (computer === "Rock" && player === "Scissors") {
    result = "Computer wins !";
  } else if (computer === "Scissors" && player === "Paper") {
    result = "Computer wins !";
  } else if (computer === "Scissors" && player === "Rock") {
    result = "Player wins !";
  }
  return result;
};

export default winnerAnnouncer