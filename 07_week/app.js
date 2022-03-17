const startButton = document.getElementById("start-button")
const stopButton = document.getElementById("stop-button")
const resetButton = document.getElementById("reset-button")
const saveButton = document.getElementById("save-button")
const secondsHTML = document.getElementById("seconds");
const minutesHTML = document.getElementById("minutes");
const hoursHTML = document.getElementById("hours");
let seconds = parseInt(secondsHTML.innerText); 
let minutes = parseInt(minutesHTML.innerText); 
let hours = parseInt(hoursHTML.innerText); 

startButton.addEventListener("click", () => {
    var myInterval = setInterval(timerFunctional,1000)
    
    stopButton.addEventListener("click", () => {
    clearInterval(myInterval);
})
} ); 



function timerFunctional(){

        seconds +=1;

      if (seconds == 60) {
        minutes +=1;
        seconds = 0;
      }

      if (minutes == 60) {
        hours+=1;
        minutes = 0;
      }

      secondsHTML.innerHTML = addZero(seconds);
      minutesHTML.innerHTML = addZero(minutes);
      hoursHTML.innerHTML = addZero(hours);
}

function addZero(value) {
    return value < 10 ? "0" + value : value
  }
  function createTimerHtml() {
    const timerHtml = document.createElement('div');
    timerHtml.innerHTML = `
        <span id="hour">00</span> :
        <span id="minute">00</span> :
        <span id="secunde">00</span>
    `
    timerHtml.setAttribute("class","timer")
    return timerHtml;
  }
  
  function createTimer(initialSecunde) {
    const timerHtml = createTimerHtml();
  
    const hourHtml = timerHtml.querySelector('#hour');
    const minuteHtml = timerHtml.querySelector('#minute');
    const secundeHtml = timerHtml.querySelector('#secunde');
  
    let secunde = initialSecunde;
    let minute = 59;
    let hour = 0;
  
    document.body.appendChild(timerHtml);
  
  }