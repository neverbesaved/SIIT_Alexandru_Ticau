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
  let resultedString = new String();
  for (i = 0; i < string.length; i++) {
    resultedString += string[i];
    resultedString += string[i];
  }
  return resultedString;
}

// 4. A set is a collection of unique items. A set can be formed from an array by removing all duplicate items.
// Create a function that sorts an array and removes all duplicate items from it.
// https://edabit.com/challenge/Mo6Coy4PpTbZgtDKd
function set(array) {
  ourSet = new Set(array); //cea mai simpla solutie
  return ourSet;
}

// sau

function set(array) {
  let ourSet = [];
  let repeatedElement = false;
  for (i = 0; i < array.length; i++) {
    let elementIndex = array.indexOf(array[i]);
    for (j = 0; j < ourSet.length; j++) {
      if (array[elementIndex] == ourSet[j]) {
        // Complexitatea putin mare din cauza a 2 cicluri for ,
        repeatedElement = true; // dar nu mi-a venit in minte alta solutie
      } else {
        repeatedElement = false;
      }
    }
    if (repeatedElement == false) {
      ourSet.push(array[elementIndex]);
    }
  }
  return ourSet;
}

// 5. Write a function that returns the number of users in a chatroom based on the following rules:
// If there is no one, return "no one online".
// If there is 1 person, return "user1 online".
// If there are 2 people, return "user1 and user2 online".
// // If there are n>2 people, return the first two names and add "and n-2 more online".
// https://edabit.com/challenge/hscAGyt4iNZ3PKy3g
function chatroomStatus(users) {
  let status = "";
  switch (users.length) {
    case 0:
      status = "no one online";
      break;
    case 1:
      status = users[0] + " online";
      break;
    case 2:
      status = users[0] + " and " + users[1] + " online";
      break;
    default: {
      status =
        users[0] +
        " " +
        users[1] +
        " and " +
        (users.length - 2) +
        " more online";
    }
  }
  return status;
}
