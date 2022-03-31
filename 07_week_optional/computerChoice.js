const choiceArray = ["Rock","Paper","Scissors"];

export const computerChoice = () => {
    let randomNum = Math.floor(Math.random()*3);
    console.log(randomNum)
    let result = choiceArray[randomNum];
    console.log(result)
    return result
}