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
