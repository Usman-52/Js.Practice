//?  previous chapter issues in for loop:
//* 1). in chapter No. 18 example : when we searched peshawar and we find peshawar in index No. 2 then loop didn't break (stop).
//* until last iteration 

//* for Example we need to search my identity card number in Nadra Office (let say about 15 millions people are registered wid Nadra).
//* we find my card number on 99 Number then it'll very time consumable to iterate 15 millions time the loop.

//! what we should do to make more better for loop?

// ? we will add Flag , loopus Interruptus

//? what is Flag?
//* Flag is like a signal in programming is used to let program know that your certain condition has met. it usually storing boolean values 
//* 0s or 1s (true or false) , you can store any value in Flag variable but mostly using for boolean values.

//? what's loopus Interruptus?
//* means a break keyword which is used to break or executed the code anywhere when they met the condition.
//* it means whenever you find what you were searching about then the loop will stop executing more ..

// ? implementation

// var studentsRecord = ["Muhammad Usman", "Sadia Afridi", "Mohib Ullah", "Kalsoom", "Muhammad Huzaifa", "Abdul Haseeb"];


// var meet = false; //* Flag variable 
// var searchStd = prompt("Enter Student Name:");

// for (var stdIndex = 0; stdIndex < studentsRecord.length; stdIndex++) {
//     if (searchStd === studentsRecord[stdIndex]) {
        
//         meet = true;
//         break;  //* loopus interruptus
//     }

//     console.log(studentsRecord[stdIndex])

// }

// if(meet) {
//     alert(`Yes, ${searchStd} is enrolled with us..`)
// }
// else{
//     alert(`No, ${searchStd} is Not enrolled with us..`)
// }

//? OR

// if (meet === true) {
//     alert(`Yes, ${searchStd} is enrolled with us..`)
// }
// else {
//     alert(`No, ${searchStd} is NOT enrolled with us..`)
// }

// ? OR

// if (meet === false) {
//     alert(`No, ${searchStd} is NOT enrolled with us..`)
// }
// else {
//     alert(`Yes, ${searchStd} is enrolled with us..`)
// }

//? why we used here Flag?
//* we used flag variable (meet) because if run the program without the flag variable then the repetition
//* in the program massage..

//? why we used here ?
//* because whenever and wherever we meet the condition the program will terminating ...


//!     SOME QUESTION ON FOR LOOP

//? Question No.1
//? How can a for loop be used to iterate over the elements of an array or list?
//? Description:
//*Think about how a for loop can access each individual element in a list or array, processing each element one by one.
//* Consider what the loop variable represents during each iteration.

// var stdNames = ["sadia", "usman", "khan", "inam", "muhammad", "iqbal"];

// for (var i = 0; i < stdNames.length; i++) {
//     console.log(stdNames[i]);
// }

//? Question No.2
//? Sum of Odd Numbers
//? Description:
//* Given an array of integers, write a program that uses a for loop to calculate the sum of all odd numbers in the array.

// var oddNumbers = [1,3,4,5,6,7,8,9,15,16,17,18]
// sum = 0;
// for (var i = 0; i < oddNumbers.length; i++) {  
//     if(oddNumbers[i] % 2 === 1) {  //* you can also write if (oddNumbers[i] % 2 !== 0)
//         sum += oddNumbers[i];
//     } 
// }

// console.log(sum) //* 57

//? Question No.3
//? Count Vowels
//? Description:
//* Create a program that takes a string input and counts how many vowels (a, e, i, o, u) it contains using a for loop.

// var str = "Hello Usman, How are you?";
// var vowels = "aeiouAEIOU";
// var count = 0;


// for(var i = 0; i < str.length; i++ ) {
//     if(vowels.includes(str[i])) {
//         count++;
//     }
// }

// console.log(count)  //* 9

// ? Question No.4
//?  Factorial Calculation
//? Description:
//*Calculate the factorial of a given number (5!)
var fact = [5, 4, 3, 2, 1]
var factorial = 1;
for(var i = 0; i < fact.length; i++) {
    
    factorial  = factorial * fact[i];
    
}
console.log(factorial)