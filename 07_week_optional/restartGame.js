import {
    playerPlayground,
    computerPlayground,
    displayChoice,
  } from "./domManipulating.js";


const restartGame = () => {
    const htmlCollection = document.getElementsByClassName("player-choice");
    const  htmlArray = Array.prototype.slice.call( htmlCollection, 0 );
    htmlArray.forEach((element)  => {
        element.remove();
    });
    const announcerHTML = document.getElementById("announcer");
    announcerHTML.remove();
};
export default restartGame;