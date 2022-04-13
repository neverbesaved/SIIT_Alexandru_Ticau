import Ship from "./ship.js";

const shipList = [];
const shipTypes = ["blue", "green", "red"];

const addShip = document.getElementById("addShip");
addShip.addEventListener("click", () => {
  let randomNum = Math.floor(Math.random() * 3);
  const ship = new Ship(shipTypes[randomNum], shipClick);
  shipList.push(ship);
});

const shipClick = (activeShipLocal) => {
  for (const ship of shipList) {
    if (ship !== activeShipLocal) {
      ship.stopShip = true;
    }
  }
};

document.addEventListener("keydown", (event) => {
    console.log(event.key)
  switch (event.key) {
    case "ArrowRight":
      shipList.forEach((ship) => {
        ship.moveRight();
      });
      break;
    case "ArrowLeft":
      shipList.forEach((ship) => {
        ship.moveLeft();
      });
      break;
    case "ArrowUp":
      shipList.forEach((ship) => {
        ship.moveUp();
      });
      break;
    case "ArrowDown":
      shipList.forEach((ship) => {
        ship.moveDown();
      });
      break;
  }
});
