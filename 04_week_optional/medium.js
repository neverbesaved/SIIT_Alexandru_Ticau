// Medium

// 1. Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
// https://edabit.com/challenge/4gzDuDkompAqujpRi
function addUp(number) {
  let summ = 0;
  let i = 0;
  while (i <= number) {
    summ += i;
    i++;
  }
  return summ;
}

// 2. Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.
// https://edabit.com/challenge/Q3n42rEWanZSTmsJm
function minMax(ourArray) {
  let minMaxArray = [];
  let min = ourArray[0];
  let max = ourArray[0];
  for (i = 0; i < ourArray.length; i++) {
    if (ourArray[i] > max) {
      max = ourArray[i];
    } else if (ourArray[i] < min) {
      min = ourArray[i];
    } else {
      continue;
    }
  }
  minMaxArray.push(min);
  minMaxArray.push(max);
  return minMaxArray;
}

// 3. Create a function that takes a string and returns a string in which each character is repeated once.
// https://edabit.com/challenge/Mc6Xi4PRw7fDzeMDB
function doubleChar(string) {
    let resultedString =new String;
    for(i=0;i<string.length;i++){
        resultedString+=string[i]
        resultedString+=string[i]
    }
    return resultedString
}

// 4. A set is a collection of unique items. A set can be formed from an array by removing all duplicate items.
// Create a function that sorts an array and removes all duplicate items from it.
// https://edabit.com/challenge/Mo6Coy4PpTbZgtDKd
function set(array){
    let testedElement=array[0];
    let ourSet = [];
    let repeated=false;
    for(i=1;i<array.length;i++){
        if(testedElement==array[i]){
            repeated=true;
        } else { 
            repeated=false
        }
        
        if(repeated){
            continue
        } else {
            ourSet.push(array[i])
        }
        testedElement==array[i];
    }
    return ourSet
}