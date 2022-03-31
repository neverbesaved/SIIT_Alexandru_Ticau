const choiceArray = ["Rock", "Paper", "Scissors"];

const computerChoice = () => {
  let randomNum = Math.floor(Math.random() * 3);
  let result = choiceArray[randomNum];
  return result;
};

export default computerChoice
