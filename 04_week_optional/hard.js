// 1. You're given a string of words. You need to find the word "Nemo", and return a string like this: "I found Nemo at [the order of the word you find Nemo]!".
// If you can't find Nemo, return "I can't find Nemo :(".
// https://edabit.com/challenge/c23dFfNiKbnguSQtq
function findNemo(ourString){
    let ourNemo = "Nemo";
    let result="";
    if(ourString.indexOf(ourNemo)!=0){  
        result = "I found Nemo at "+ourString[indexOf];  
    } else {
        result = "I can't find Nemo :("
    }
    return result
}