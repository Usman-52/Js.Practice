//! Strict Mood of javascript
//* Strict Mood is use in javascript to make easier for us to write a source javascript code.
//* The activation of the strict mood will reduce the mistakes in your code and make easy to debug you code.
//* you can activate the strict mood Globally and to specific piece of code like function , object etc.

// "use strict";

// let usman = false;
// const hello = true;
// if (hello) uman = true;
// if (usman) console.log('hello usman');

//* in the above example you can see that the variable usman in incorrect in the first if statement but if You can run,
//* the code with strict mood it'll tell you where you did mistake but if You run the code without strict mood it'll,
//* it'll give you nothing means it won't be giving you any error massage.

//! WHAT IS FUNCTION?
//* Function is simply a block (piece) of code which we can actually reuse over and over again.
//* it's  a little bit like a variable but variable can store just one value and Function can store the whole block of code.

//! Example:

// function name(params) {

// }

// function juice(Banana, Mango) {
//     console.log("I really like to drink Banana sheik");
// }
// //* juice (); is called invoking function , running function, calling function.
// juice ();
// juice ();
// juice ();

//* the above example will return nothing because we didn't pass the arguments of the parameters.
//* but it'll just print the massage which we given in the console.
//! Note:
//* it's not necessary that every function will be must returning something.

//! EXAMPLE N0.2:

// function juiceMachine(Banana,Mango) {
//     const juice = console.log(` i would like to drink ${Banana} Banana's juice `);
//     return juice;
// }

// juiceMachine(3, 0);
// juiceMachine(4, 0)

//! 2).Greeting Function:
//* INSTRUCTION:
//* Write a function named greet that takes a single argument name.
//* The function should return a greeting string in the format "Hello, [name]!".
//* Test the function with the following names: "Khuzaifa", "Bilal", and "Khan lala".

// function yourName(name) {
//     console.log(`Aslam.o.Alikom ${name}`);
// }

// yourName("Muhammad Usman");
// yourName("khuzaifa");
// yourName("Bilal");
// yourName("khan lala");

//! 3). Even or Odd Function:
//* INSTRUCTIONS:
//* Write a function named is_even that takes a single argument n, which is an integer.
//* The function should return True if n is even, and False if n is odd.
//* Test the function with the following values: 4, 7, and 0.

// let enteredNumber = +prompt("Enter your number:");

// function evenOrOdd(number){
//     if(enteredNumber % 2 === 0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// let result = evenOrOdd(enteredNumber);
// console.log(`The Number ${enteredNumber} is ${result}`);

//! French fri Machine

// //* you will use function and calling function one function inside another function.
// function potatoCuterMachine(potato){
//     return potato * 10;
// }

// function numberOfPotato(potato){
//     const potatoPieces = potatoCuterMachine(potato);
//     const pieces = `the machine made ${potatoPieces} potato pieces`;
//     return pieces;
// }

// console.log(numberOfPotato(1));

//?  Coding Challenge #1
//* Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
//* BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).
//* Your tasks:
//* 1. Store Mark's and John's mass and height in variables
//* 2. Calculate both their BMIs using the formula (you can even implement both versions)
//* 3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.
//* Test data:
//* Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
//* Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

//* Data No.1
// const markMass = 78;
// const markHeight = 1.69;
// const johnMass = 95;
// const johnHeight = 1.95;

//* Data No.2
// const markMass = 95;
// const markHeight = 1.88;
// const johnMass = 85;
// const johnHeight = 1.76;

// let markBMI = markMass / markHeight ** 2;
// let johnBMI = johnMass / (johnHeight * johnHeight);
// let markHigherBMI = markBMI > johnBMI;

// console.log(`Mark BMI is: ${markBMI} & John BMI is: ${johnBMI} so Mark BMI is greater Then John: ${markHigherBMI}`);

//? Coding Challenge #2
//* Use the BMI example from Challenge #1, and the code you already wrote, and improve it.
//* Your tasks:
//* 1. Print a nice output to the console, saying who has the higher BMI. The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
//* 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

// if (markBMI > johnBMI) {
//   console.log(
//     `Mark's BMI : ${markBMI.toFixed(2)} is higher than ${johnBMI.toFixed(2)} `
//   );
// } else {
//   console.log(
//     `John's BMI : ${johnBMI.toFixed(2)} is higher than ${markBMI.toFixed(2)} `
//   );
// }

//? Coding Challenge #3
//* There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!
//* Your tasks:
//* 1. Calculate the average score for each team, using the test data below

//* 2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score)

//* 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks

//* 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy

//* Test data:
//* Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
//* Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
//* Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

// const averageOfDolphins = (96 + 108 + 89) / 3;
// const averageOfKoalas = (88 + 95 + 110) / 3;
// console.log(`The average fo Dolphins is: ${averageOfDolphins.toFixed(0)} and the average of Koalas is: ${averageOfKoalas.toFixed(0)} so The Match is Draw: ${(averageOfDolphins <= averageOfKoalas)}`);

//* Data Bonus 1:
// const dolphinsScore = 97 + 112 + 101
// const koalasScore = 109 + 95 + 123

//* Data Bonus 2:
const dolphinsScore = 97 + 112 + 101
const koalasScore = 109 + 95 + 106


if (dolphinsScore < koalasScore) {
    console.log(`Koalas won the match`)
}else if(dolphinsScore > koalasScore) {
    console.log(`Dolphins won the `)
}else {
    console.log('the match is draw')
}


