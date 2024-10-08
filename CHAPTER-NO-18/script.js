"use strict";
//* FOR LOOP:
//* loop mean to try something again and again....
//* FOR LOOP loop in JavaScript is a fundamental control flow statement used for iterating over a block of code a specific number of times. It allows you to execute a set of statements repeatedly, with each iteration potentially changing a variable's value.

//* why we are using for loop , why we feel the need of for loop to use ?

//* Here through this problem we will see why we need to use for loop.

//! Example:
//* write a program for the cleanest cities list of pakistan and the users would checking their own city weather their city belongs 
//* to the cleanest cities of pakistan or not.

// var cleanestCities = ["islamabad","abatabad", "peshawar", "murrey", "karak"];
// var enterYourCity = prompt("Enter your city name:");

// if (enterYourCity === cleanestCities[0]) {
//     alert("belong to cleanest city");
// }else if (enterYourCity === cleanestCities[1]) {
//     alert(`${enterYourCity} is belong to the cleanest city of pakistan`);
// }else if(enterYourCity === cleanestCities[2]) {
//     alert(`${enterYourCity} is belong to the cleanest city of pakistan`);
// }else if (enterYourCity === cleanestCities[3]) {
//     alert(`${enterYourCity} is belong to the cleanest city of pakistan`);
// }else if (enterYourCity === cleanestCities[4]) {
//     alert(`${enterYourCity} is belong to the cleanest city of pakistan`);
// }else{
//     alert(`${enterYourCity} is NOT belong to the cleanest city of pakistan`);
// }

//?  What's the problem in the if Else statement?
//* The main problem is that for every index, match , for every comparison we are writing code so it's become repetitive
// * and we're giving for comparison , index, match a same massage (alert).

//! so we can solve this problem with the help of For loop, that's why for loop came

// ? What's loop?
//* Repeatedly running or iterating something 

//? syntax of for loop in JavaScript 

//* for (Expression 1; Expression 2; Expression 3) {

//* black of code to be executing

// *}


//? Expression 1:
//* In Expression 1 we are creating a variable and assign value to that variable is executed (one time) before the execution of code black.
//? Expression 2:
//* defining the condition for the code block execution..
//? Expression 3: 
//* Expression 3 is executing (every time) after code block execution ( decrement or increment a variable which we creating in Expression 1)..

//! Note: it first time the when loop start the first expression and second expression will be executing not 
//! third expression. in second iteration the Expression 3 will also start executing (increment or decrement).

//? Example:
//* print numbers from 1 to 100

// for (var num = 1; num <= 100; num++) {
//     console.log(num);
// }

// ? Same above Example:

var cleanestCities = ["islamabad","abutabad", "peshawar", "murrey", "karak"];
var enterYourCity = prompt("Enter your city name:");

for (var cityIndex = 0; cityIndex < cleanestCities.length; cityIndex++) {
    if (enterYourCity === cleanestCities[cityIndex]) {
        alert(`${enterYourCity} is in the cleanest cities of pakistan`)
    }
}

//! iteration: when one time loop is called iteration.

//* totalIteration: 6 {0,1,2,3,4,5}  
// ? zero iteration (0).
//* cityIndex = 0.
//* cityIndex === cleanestCities.length => 0 < 5 (true).
//* enterYourCity === cleanestCities[cityIndex] -> "peshawar"  === cleanestCities[0] -> "peshawar" ==== "islamabad" => FALSE

//? 1st iteration (1).
//* cityIndex = 1.
//* cityIndex === cleanestCities.length => 1 < 5 (true).
//* enterYourCity === cleanestCities[cityIndex] -> "peshawar"  === cleanestCities[1] -> "peshawar" ==== "abutabad" => FALSE

//? 2nd iteration (2).
//* cityIndex = 1.
//* cityIndex === cleanestCities.length => 2 < 5 (true).
//* enterYourCity === cleanestCities[cityIndex] -> "peshawar"  === cleanestCities[2] -> "peshawar" ==== "peshawar" => TRUE

//? 3rd iteration (3).
//* cityIndex = 1.
//* cityIndex === cleanestCities.length => 3 < 5 (true).
//* enterYourCity === cleanestCities[cityIndex] -> "peshawar"  === cleanestCities[3] -> "peshawar" ==== "murrey" => FALSE

//? 4th iteration (4).
//* cityIndex = 1.
//* cityIndex === cleanestCities.length => 4 < 5 (true).
//* enterYourCity === cleanestCities[cityIndex] -> "peshawar"  === cleanestCities[4] -> "peshawar" ==== "karak" => FALSE

//? 5th iteration (5).
//* cityIndex = 1.
//* cityIndex === cleanestCities.length => 5 < 5 (false).
//! loop will be terminated because the condition is false


//! Note: in this program their are some issues, these problem will solve in Chapter No. 19.