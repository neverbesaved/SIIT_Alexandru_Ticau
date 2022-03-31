export const computerPlayground = document.getElementById("computer-window");
export const playerPlayground = document.getElementById("player-window");

export const displayChoice = (choice, target) => {
  const result = document.createElement("img");
  switch (choice) {
    case "Rock":
      result.src = "./images/rock.jpg";
      break;
    case "Paper":
      result.src = "./images/paper.jpg";
      break;
    case "Scissors":
      result.src = "./images/scissors.jpg";
      break;
    default:
      console.log("Somehow your choice is wrong...");
  }
  target.appendChild(result);
};
