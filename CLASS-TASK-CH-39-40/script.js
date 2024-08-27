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


// * Question No.2`
//* Write a function that takes a colors of the traffic lights ("red", "yellow", "green") and return the action should be taken 
//* ("stop", "Prepare to stop", "Go"). Use a switch statement to handle the different colors if the colors not recognized, return "unknown color".

function trafficLight(color) {
    switch (true) {
        case (color === "yellow"):
          return console.log("Stop! Beep!");
            
        case (color === "red"):
          return console.log("Stop!");
            
        case (color === "green"):
          return console.log("Go!");
            
        default:
            console.log("Unknown color");
    }
}
console.log(trafficLight("yellow"))