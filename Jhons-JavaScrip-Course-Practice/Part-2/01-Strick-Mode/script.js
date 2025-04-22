//? Strict Mood

//? Why should use to "Strict Mood"?
//* strict mode is a special mode, which makes it easier for us, to write a secure JavaScript code.
//* I mean that strict mode, makes it easier for us developers, to avoid accidental errors.

//*  it helps us introduce the bugs into our code, It's will make those errors visible which javaScript silently fail to show i mean ignore these errors.

//* For Example:

// const massage = prompt("please write your massage!")
// let lengthOfYourMassage = massage.length()

// // // alert(`You have entered ${lengthOfYourMassage} and you have remaining ${280 - lengthOfYourMassage}`)
// alert(lengthOfYourMassage)

// var massage = prompt("Enter your Name")
// var sliced = massage.slice(0, 1)
// sliced = sliced.toUpperCase()
// massage = massage.toLocaleUpperCase()
// var spliced =

// alert(sliced)

//! FUNCTIONS IN JAVASCRIPT
//? WHAT IS FUNCTION?
//* Function is the chunk (Block) of code which we can reuse again and again without repeating our code.
//* A function can be with or without parameters, it also can return value and can't be.

//? This is called function declaration, here we simply declaring the functions

//? For Example:
//* A function without parameters and return something just log something to the console.

// function logger() {
//     console.log("Hello Khan!")
// }

//* Calling, Invoking, Executing the function
// logger()

//? A Function with parameters and returning something

// function juiceMachine(Apple, Banana) {
//   const juice = `${Apple} Apple and ${Banana} Banana juice`;
//   return juice;
// }

//* if u need to reuse your function then we can save the retuning value of the function in variable

// const appleJuice = juiceMachine(5, 0);
// console.log(appleJuice);

//? OR

// console.log(juiceMachine(2, 4));


//? Function Declaration vs Function Expressions

//? Function Declaration:

function clcAge1(birthYear, currentDate) {
    return currentDate - birthYear
}

const age1 = clcAge1(2000, 2025)
// console.log(age1)

//? Function Expressions
//* Expression Functions giving us a value which can store in a variable.
//* EXpression functions we can't call them before defining the function.


const clcAge2 = function() {
    return currentDate - birthYear
}

const age2 = clcAge2(2000, 2025)
console.log(age1, age2)