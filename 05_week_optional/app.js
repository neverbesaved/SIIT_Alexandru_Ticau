function calculateBMI(weight, height) {
  if (height > 3) {
    var convertedHeight = height * 0.01;
  } else {
    convertedHeight = height;
  }
  let bmi = weight / (convertedHeight * convertedHeight);
  return bmi;
}

function displayBMI(bmi) {
  let bmiWindow = document.createElement("div");
  bmiWindow.setAttribute("class", "bmi-window");

  if (bmi < 18.5) {
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
    bmiConclusion.innerText="Your bmi index is within the overweight range. Practice sport and exclude junk food please."
  } else {
    var bmiImage = document.createElement("img");
    bmiImage.src = "./images/obese.jpg";

    var bmiConclusion = document.createElement("p");
    bmiConclusion.innerText="Your bmi index is within the obese range. For your own health's sake - start doing physical activities and change alimentation routine "
  }
  let bmiValue = document.createElement("h2");
  bmiValue.innerText=bmi;

  let resetButton = document.createElement("button");
  resetButton.type = "button";
  resetButton.textContent = "Reset";
  resetButton.setAttribute('class', 'reset-button')
  resetButton.addEventListener('click',(event) =>{
      bmiWindow.parentElement.removeChild(bmiWindow);
  })

  bmiWindow.appendChild(bmiImage);
  bmiWindow.appendChild(bmiValue);
  bmiWindow.appendChild(bmiConclusion);
  bmiWindow.appendChild(resetButton)

  return bmiWindow;
}
