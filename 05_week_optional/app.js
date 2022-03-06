function calculateBMI(weight, height) {
  if (height > 3) {
    var convertedHeight = height * 0.01;
  } else {
    convertedHeight = height;
  }
  let bmi = weight / (convertedHeight * convertedHeight);
  return Math.round(bmi * 100) / 100;
}

function displayBMI(bmi) {
  let bmiWindow = document.createElement("div");
  bmiWindow.setAttribute("class", "bmi-window");

  if (bmi < 18.5 && bmi>=0) {
    var bmiImage = document.createElement("img");
    bmiImage.src = "./images/underweight.png";

    var bmiConclusion = document.createElement("p");
    bmiConclusion.innerText="Your bmi index is within the underweight range. Please eat more. "
  } else if (bmi >= 18.5 && bmi < 25) {
    var bmiImage = document.createElement("img");
    bmiImage.src = "./images/normal.png";

    var bmiConclusion = document.createElement("p");
    bmiConclusion.innerText="You bmi index is withing the normal range. Good job."
  } else if (bmi >= 25 && bmi < 30) {
    var bmiImage = document.createElement("img");
    bmiImage.src = "./images/overweight.jpg";

    var bmiConclusion = document.createElement("p");
    bmiConclusion.innerText="Your bmi index is within the overweight range. Practice sport and exclude junk food."
  } else if(bmi>=30) {
    var bmiImage = document.createElement("img");
    bmiImage.src = "./images/obese.jpg";

    var bmiConclusion = document.createElement("p");
    bmiConclusion.innerText="Your bmi index is within the obese range. For your own health's sake - start doing physical activities and change alimentation routine "
  } else { 
    var bmiImage = document.createElement("img");
    bmiImage.src = "./images/error.jpg";

    var bmiConclusion = document.createElement("p");
    bmiConclusion.innerText="An error occured, please try again "
  }
  let bmiValue = document.createElement("h2");
  bmiValue.innerText=bmi;

  let resetButton = document.createElement("button");
  resetButton.type = "button";
  resetButton.textContent = "Reset";
  resetButton.setAttribute('class', 'reset-button')
  resetButton.addEventListener('click',(event) =>{
      bmiWindow.parentElement.removeChild(bmiWindow);
      inputField.classList.remove("hidden");
  })

  bmiWindow.appendChild(bmiImage);
  bmiWindow.appendChild(bmiValue);
  bmiWindow.appendChild(bmiConclusion);
  bmiWindow.appendChild(resetButton);

  return bmiWindow;
}

let bmiMain = document.getElementById("main-window");
let weightInput = document.getElementById("weight-input");
let heightInput = document.getElementById("height-input");
let submitButton = document.getElementById("submit-button");
let inputField = document.getElementById("bmi-view")

submitButton.onclick = function() {
    let newItem = displayBMI(calculateBMI(weightInput.value,heightInput.value));
    bmiMain.appendChild(newItem);
    inputField.classList.add("hidden");
}
