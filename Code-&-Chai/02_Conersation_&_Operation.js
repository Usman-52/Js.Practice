"use strict";
// **--------------- Conversion --------------------- **//

let myNumber = 20
let numberInString = "22"
let numberWithLetters = "23abc"
let num = 1;

//**---------------------- convert the variable ---------------**//

let numberToString = String(myNumber)
// console.log(numberToString);
// console.log(typeof numberToString);

let stringToNumber = Number(numberInString)
// console.log(stringToNumber);
// console.log(typeof stringToNumber);

let numbersAndLetters = Number(numberWithLetters)
// console.log(numbersAndLetters);
// console.log(typeof numbersAndLetters); //* here the type of this variable is number 
//* the value is NaN (Not a Number) because whenever we convert number in string with 
//* Alphabets or symbols etc will come NaN cause of it's not pure number

let numToBoolean = Boolean(num)
// console.log(numToBoolean); //* output will come true cause 1 = true and 0 = false
// console.log(typeof numToBoolean); //* the Type will be boolean

//*============================== Operations ==================================//

console.log(2 + 3) //* 5
console.log("2" + 3) //* 23
console.log(2 + "3") //* 23
console.log("1" + 2 + 1) //* 121
console.log(1 + 2 + "1"); //* 31 (1 + 2 will first add then concat 1 with 3)
