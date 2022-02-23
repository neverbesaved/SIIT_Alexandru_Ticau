// Easy

// 1. Create a function that takes two numbers as arguments and return their sum.
// https://edabit.com/challenge/3LpBLgNRyaHMvNb4j
function summ(a,b){
    let summ=a+b;
    return summ
}

// 2. Write a function that takes an integer minutes and converts it to seconds.
// https://edabit.com/challenge/8q54MKnRrm89pSLmW
function convertToSeconds(minutes){
    let seconds=minutes*60;
    return seconds
}

// 3. Create a function that takes a number as an argument, increments the number by +1 and returns the result.
// https://edabit.com/challenge/NAQhEoxbofPidLxm9
function incrementNumber(number){
    return number+=1
}

// 4. Create a function that takes an array containing only numbers and return the first element.
// https://edabit.com/challenge/QaApgtePE6QrCZ64o
function firstElement(ourArray){
    return ourArray[0]
}

// 5. There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.
// https://edabit.com/challenge/Q2j5FTFtsk7PdzrQk
function remainder(a,b){
    let ourRemainder = a%b;
    return ourRemainder
}

// 6. In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:

// chickens = 2 legs
// cows = 4 legs
// pigs = 4 legs
// // The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals.
// https://edabit.com/challenge/8Qg78sf5SNDEANKti
function animals(chickens,cows,pigs){
    let legs=chickens*2 + cows*4 + pigs*4
    return legs
}

// 7. Create a function that returns true if an integer is evenly divisible by 5, and false otherwise.
// https://edabit.com/challenge/iBQYbSHZGhpktLRdn
function divisibleByFive(number){
    let truth = (number%5==0);
    return truth
}

// 8. Create a function that takes two strings as arguments and return either true or false depending on whether the total number of characters in the first string is equal to the total number of characters in the second string.
// https://edabit.com/challenge/yHGowWucg3k2kJdZ4
function comp(string1,string2){
    let truth = (string1.length == string2.length)
    return truth
}

// 9. Write a function that takes a string name and a number num (either 0 or 1) and return "Hello" + name if num is 1, otherwise return "Bye" + name.
// https://edabit.com/challenge/kLa2w7m4h849k8rmW
function sayHelloBye(name,num){
    let ourString;
    if (num==1){
        ourString="Hello " + name; 
    } else if (num==0){
        ourString="Bye "+name;
    } else {
        ourString="An error occured , inputed number is not 0 or 1"
    }
    return ourString
}
