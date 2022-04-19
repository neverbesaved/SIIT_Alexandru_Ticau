import ElementMove from './ElementMove.js';

class Player extends ElementMove {
  static createElement() {
    let player = document.createElement("div");
    player.setAttribute("id","player");
    player.style.top = "0px";
    player.style.left = "0px";

    return player;
  }

  constructor(container) {
    super();
    this.element = Player.createElement();
    container.appendChild(this.element);
  }
}

export default Player;