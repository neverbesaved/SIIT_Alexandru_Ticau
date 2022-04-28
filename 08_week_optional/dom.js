import { callServer } from "./api.js";

const container = document.getElementById("container");

export async function displayFox(baseUrl) {
  const imageServer = await callServer(baseUrl);
  const imageDOM = document.createElement("img");
  imageDOM.src = imageServer.image;
  imageDOM.alt = imageServer.link;
  container.appendChild(imageDOM);
}
export async function displayDog(baseUrl) {
  const imageServer = await callServer(baseUrl);
  const imageDOM = document.createElement("img");
  imageDOM.src = imageServer.url;
  container.appendChild(imageDOM);
}
export async function displayRickMorty(baseUrl) {
  let randomNum = Math.floor(Math.random() * 826);
  const serverResponse = await callServer(`${baseUrl}/character/${randomNum}`);
  const imageDOM = document.createElement("img");
  const characterName = document.createElement("h2");
  characterName.innerText = serverResponse.name;
  imageDOM.src = serverResponse.image;
  container.appendChild(characterName);
  container.appendChild(imageDOM);
}

export function cleanContainer() {
  container.innerHTML = "";
}
