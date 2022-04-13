const gameContainer = document.getElementById("game-container")

class Ship {
  shipElement;
  shipType;

  constructor(type, shipClick) {
    const shipImg = document.createElement("img");
    shipImg.src = `./ships/${type}.png`;
    shipImg.setAttribute("class", "ship");
    shipImg.style.position = "relative";
    shipImg.style.top = "0";
    shipImg.style.left = "0";

    this.stopShip = true;
    shipImg.addEventListener("click", () => {
      this.stopShip = !this.stopShip;
      shipClick(this);
    });

    this.shipElement = shipImg;
    this.shipType = type;
    gameContainer.appendChild(shipImg);
  }

  moveRight() {
    if (this.stopShip == false) {
      const oldLeft = parseInt(this.shipElement.style.left);
      this.shipElement.style.left = oldLeft + 10 + "px";
    }
  }

  moveLeft() {
    if (this.stopShip == false) {
      const oldLeft = parseInt(this.shipElement.style.left);
      this.shipElement.style.left = oldLeft - 10 + "px";
    }
  }
  moveUp() {
    if (this.stopShip == false) {
      const oldTop = parseInt(this.shipElement.style.top);
      this.shipElement.style.top = oldTop - 10 + "px";
    }
  }
  moveDown() {
    if (this.stopShip == false) {
      const oldTop = parseInt(this.shipElement.style.top);
      this.shipElement.style.top = oldTop + 10 + "px";
    }
  }
}

export default Ship;
