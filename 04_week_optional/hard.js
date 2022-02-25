// 1. You're given a string of words. You need to find the word "Nemo", and return a string like this: "I found Nemo at [the order of the word you find Nemo]!".
// If you can't find Nemo, return "I can't find Nemo :(".
// https://edabit.com/challenge/c23dFfNiKbnguSQtq
function findNemo(ourString) {
  let ourNemo = "Nemo";
  let result = "";
  if (ourString.indexOf(ourNemo) != -1) {
    result = "I found Nemo at " + ourString.indexOf(ourNemo);
  } else {
    result = "I can't find Nemo :(";
  }
  return result;
}

// 2.  Write a function that converts an object into an array, where each element represents a key-value pair in the form of an array.
// https://edabit.com/challenge/pPNAs5PvB3WvnDwDM
function toArray(ourObject) {
  const keys = Object.keys(ourObject);
  const values = Object.values(ourObject);
  let ourArray = [];
  for (i = 0; i < keys.length; i++) {
    let temporaryArray = [];
    temporaryArray.push(keys[i]);
    temporaryArray.push(values[i]);
    ourArray.push(temporaryArray);
  }
  return ourArray;
}
