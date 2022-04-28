import ElementMove from "./ElementMove.js";

class Monster extends ElementMove {
  constructor(location, posX, posY) {
    super();
    const monsterImg = document.createElement("img");
    monsterImg.style.left = `${posX}px`;
    monsterImg.style.top = `${posY}px`;
    const randomNumber = Math.floor(Math.random() * 11) + 1;

    monsterImg.src = `./monsters/monster${randomNumber}.svg`;

    location.appendChild(monsterImg);
    monsterImg.classList.add("monster");
    this.element = monsterImg;
  }
}

export default Monster;
