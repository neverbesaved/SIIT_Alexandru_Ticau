const choiceArray = ["Rock", "Paper", "Scissors"];

export const computerChoice = () => {
  let randomNum = Math.floor(Math.random() * 3);
  let result = choiceArray[randomNum];
  return result
};
