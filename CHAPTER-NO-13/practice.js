//*  CHAPTER NO.13     TESTING SETS OF CONDITION

//! PRACTICE EXAMPLES:

//! 1). Determine the largest number

//* Instruction:
//* Write  a program that takes three  numbers as input and determines which one is the largest.

// var firstNumber = +prompt("Enter your first number");
// var secondNumber = +prompt("Enter your Second number");
// var thirdNumber = +prompt("Enter your Third number");

// if (firstNumber > secondNumber && firstNumber > thirdNumber){
//     console.log(`The number ${firstNumber}  is the largest number among them.`);
// }
// else if (secondNumber > firstNumber && secondNumber > thirdNumber){
//     console.log(`The  number  ${secondNumber} is the largest number among them.`);
// }
// else{
//     console.log(`The number  ${thirdNumber} is the largest number among them.`);
// }


//! 2). Grade classification

//* Instructions:
//* Write a program that takes a Students marks  and out put their grades (A+, A, B+, B, Fail).

// var yourName = prompt("Enter your full name:");
// var yourMarks = +prompt("Enter your Marks");

// if (yourMarks >= 90){
//     console.log(`${yourName}, Congratulation you got A+ grade.`);
// }

// else if (yourMarks >= 80){
//     console.log(`${yourName},  Congrats you got A grade.`);
// }

// else if (yourMarks >= 70){
//     console.log(`${yourName}, You Got B+ Grade.`);
// }

// else if (yourMarks >= 60){
//     console.log(`${yourName}, You Got B Grade.`);
// }

// else if (yourMarks >= 50){
//     console.log(`${yourName}, You Got C Grade.`);
// }

// else{
//     console.log(`${yourName}, Sorry! Your are Fail.`);
// }

//! Even or Odd Number Identification

//*Instruction
//* Write Program that takes a number and determines if it is Even or Odd.

// var enteredNumber = +prompt("Enter your number:")

// if (enteredNumber % 2 === 0){
//     console.log( enteredNumber + " is Even.");
// }

// else{
//     console.log(enteredNumber + " is odd");
// }

//!        SWITCH STATEMENT
//*Definition
//* Switch statement is used in javascript to execute the block of code based on the value of an expression.


//! EXAMPLE PROGRAMS ON SWITCH STATEMENT

//! 1).Buggy Weather Report

// let currentDay = prompt("Would you like to tell me that What day of the weak is today");
// switch (currentDay) {
//     case "Monday":
//         console.log("Brace yourselves for a downpour of compiler errors! Don't forget your semicolon umbrella and a strong cup of coffee to debug the storm");
//         break;
//     case "Tuesday":
//         console.log("Warning! A logic bomb is headed your way! Expect unexpected program crashes and infinite loops. Best to stay offline today.");
//         break;
//     case "Wednesday":
//         console.log("prepare for a hailstorm of merge conflicts! Your local repositories will be under siege. Remember, good commenting habits could save you today");
//         break;
//     case "Thursday":
//         console.log("The internet connection is unstable! Websites are loading slower than a program with a million nested loops. Time to rely on your offline documentation");
//         break;
//     case "Friday":
//         console.log("The time has come for the code freeze! But wait, a critical bug has been discovered! Brace yourselves for a weekend of emergency debugging");
//         break;
//     case "Saturday":
//         console.log("Get ready for a barrage of automated tests! Every line of code will be under scrutiny. Today's the day to find and fix those pesky bugs.");
//         break;
//     case "Monday":
//         console.log("Attention coders! The servers are undergoing a mandatory reboot. Expect downtime and potential data loss (just kidding... hopefully)");
//         break;
//     default:
//         console.log("Sorry! Invalid Entry");
//         break;
// }

//! Robot Chef:

// let yourName = prompt("Hello Sir/MAM! would you like to tell me Your Name?");
// let yourMood = prompt("What's going on today? Are you feeling happy, sad, or maybe just tired? Robot Chef can whip up something amazing based on your mood!");

// switch (yourMood) {
//     case "happy":
//         console.log(`${yourName} Get ready for the Happy Feast! It's got tiny, super fresh Chicken krahi with special Lassi, and a super cold, creamy yogurt treat for the end – all to make you even happier!`);
//         break;
//     case "sad":
//         console.log(`${yourName} Don't worry, Robot Chef is here to help! The Sad Feast is like a big hug in a bowl. It's got a warm, yummy broth that's good for your tummy, the fanciest kind of meat ever (grown in a lab!), and cookies printed by a special machine that will make you feel all happy inside!`);
//         break;
//     case "tired":
//         console.log(`${yourName} The Tired Feast is here to give you an energy boost! We've got a green drink full of good stuff, special tiny robots that will help you feel more awake, delicious energy bars, and even something to help you sleep soundly later – all in one meal!`);
//     default:
//         console.log("invalid option");
//         break;
// }


//! TERNARY OPERATORS OR CONDITIONAL OPERATOR
//*DEFINITION:
//* TERNARY MEANS THREE , SO ternary operators alow you to write the statement or expression same as we are writing in if/else BUT it's write in just single (one) line.

//! simple Tip calculator

// let bill = +prompt("What is you bill?");
// let tip = bill >= 50  && bill <= 300 ? bill * 0.15 : bill * 0.2;
// console.log(`The bill was at first: ${bill} The tip is ${tip} and the final bill is ${bill + tip}`);
