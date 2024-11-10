// * Problem No.0
//* Write a function getGrade(score) that takes a numeric score (0 through 100)  and returns a letter grade based on the following scale.
// * Use a switch Statement: 

// * 90 - 100 = "A"
//* 80 - 89 = "B"
//* 70 - 79 = "C"
//* 60 - 69 = "D"
//* 0 - 59 = "F"

// function getGrade(score) {
//     switch(true) {
//         case (score >= 0 && score <= 59):
//             return "F";
//         case (score >= 60 && score <= 69):
//             return "D";
//         case (score >= 70 && score <= 79):
//                 return "C";
//         case (score >= 80 && score <= 89):
//                 return "B";
//         case (score >= 90 && score <= 100):
//                 return "A";
//         default : return "sorry you have added invalid numbers"
//     }
// }

// console.log(getGrade(80))


// * Problem No.2`
//* Write a function that takes a colors of the traffic lights ("red", "yellow", "green") and return the action should be taken 
//* ("stop", "Prepare to stop", "Go"). Use a switch statement to handle the different colors if the colors not recognized, return "unknown color".

// function trafficLight(color) {
//     switch (true) {
//         case (color === "yellow"):
//           return console.log("Stop! Beep!");
            
//         case (color === "red"):
//           return console.log("Stop!");
            
//         case (color === "green"):
//           return console.log("Go!");
            
//         default:
//             console.log("Unknown color");
//     }
// }
// console.log(trafficLight("yellow"))

// * Problem No.3

// * Write a function that takes a string of comma-separated numbers and returns the sum of all the numbers. If the string contains any non-numeric characters, ignore them and continue with the calculation.

// function sumOfNumbers(str) {
//     let sum = 0;
//     let numbers = str.split(",");
//     for (let i = 0; i < numbers.length; i++) {
//         let number = numbers[i].trim();
//         if (!isNaN(number)) {
//             sum += parseInt(number);
//         }
//     }
//     return sum;
// }
// console.log(sumOfNumbers("1,2,3,4,5"))
// console.log(sumOfNumbers("1,2,3,4,5,a,b,c"))

// * Problem No.4
//* Create a function that takes The name of the fruit and returns its price per kilogram. Use a switch statement to handle different
//* fruit e.g ("Apple", "Banana", "Orange", "grape"). If the fruit is not listed, return 'price not available'.

// function fruitsPrice(fruits) {
//     switch (fruits) {
//         case "Apple" :
//             return 1.5 + "Kg";
//         case "Banana" :
//             return 2.5 + "-Dozen";
//         case "Orange" :
//             return 3 + "-Dozen";
//         case "Grapes" :
//             return 4 +  "kg";
//         case "Kwei-fruit" :
//             return 10 + "Kg";
//         default :
//         return "Sorry This Price is Unavailable";
//     }
// }

// console.log(fruitsPrice("Orange"));

//* Write a function that takes a vehicle type code ("C" for Car, "M" Motorcycle , "T" for Truck), return the type of vehicle.
//* Use a Switch Statement to handle the different types. If the vehicle type code is invalid, return "Unknown Vehicle Type".

// function carType(firstLetter) {
//     switch (firstLetter) {
//         case "c":
//             return "Your Vehicle Type is Car";

//         case "m" :
//             return "Your Vehicle Type is Motorcycle";
        
//         case "T" :
//             return "Your Vehicle Type is Truck";

//         case "r" :
//             return "Your Vehicle Type is Reqsha";
//         default:
//             return "Unknown Vehicle Type";    
//     }
// }

// console.log(carType("c"))