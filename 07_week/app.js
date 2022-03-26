const startButton = document.getElementById("start-button");
const stopButton = document.getElementById("stop-button");
const resetButton = document.getElementById("reset-button");
const saveButton = document.getElementById("save-button");
const secondsHTML = document.getElementById("seconds");
const minutesHTML = document.getElementById("minutes");
const hoursHTML = document.getElementById("hours");
const section = document.querySelector("section");

function startTimer() {
  let seconds = parseInt(secondsHTML.innerText);
  let minutes = parseInt(minutesHTML.innerText);
  let hours = parseInt(hoursHTML.innerText);
  incrementTime = setInterval(() => {
    seconds += 1;

    if (seconds == 60) {
      minutes += 1;
      seconds = 0;
    }

    if (minutes == 60) {
      hours += 1;
      minutes = 0;
    }

    secondsHTML.innerHTML = addZero(seconds);
    minutesHTML.innerHTML = addZero(minutes);
    hoursHTML.innerHTML = addZero(hours);
  }, 1000);
}

function stopTimer() {
  clearInterval(incrementTime);
}

function resetTimer() {
  clearInterval(incrementTime);
  secondsHTML.innerHTML = "00";
  minutesHTML.innerHTML = "00";
  hoursHTML.innerHTML = "00";
}

function saveTimer() {
  let seconds = parseInt(secondsHTML.innerText);
  let minutes = parseInt(minutesHTML.innerText);
  let hours = parseInt(hoursHTML.innerText);
  const timerHtml = document.createElement("div");
  timerHtml.innerHTML = `
      <span id="hour">${addZero(hours)}</span> <span>:</span>
      <span id="minute">${addZero(minutes)}</span> <span>:</span>
      <span id="second">${addZero(seconds)}</span>
  `;
  timerHtml.setAttribute("class", "saved-timer");
  section.appendChild(timerHtml);
}

function addZero(value) {
  return value < 10 ? "0" + value : value;
}
