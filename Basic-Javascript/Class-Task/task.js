"use strict";

//! Weather Forecasting Program.

//* Instruction
//* write a program when we have cloudy then it would be raining , it don't then it won't be raining.

// var rain = prompt("Enter the Weather:");
// if (rain === "cloudy"){
//     console.log("The rain would possibly start soon.");
// }

// else{
//     console.log("There's No chances of Rain");
// }

//! BRT Card Ballance Program.
//* INSTRUCTIONS
//* Write the program how BRT card system works.

// var balance = +prompt("Enter your card Ballance");
// if (balance >= 50) {
//     console.log("You should go and take your seat");
// }
// else {
//     console.log("sorry! you should recharge your ballance");
// }

//! Burger Purchase Program.

// * INSTRUCTIONS:
//* Write a program for to buy burger if you have sufficient pocked money.

// var pocketMoney = +prompt("Enter your pocket balance:")
// var burgerPrice = 400;
// if (pocketMoney >= 400) {
//     console.log("Congratulation! you should buy the burger and eat it ");
// }

// else{
//     console.log("Sorry! you don't have a sufficient pocket Mony.")
// }

//! Even or Odd Numbers Program.
//* INSTRUCTIONS:
//* Write  Program To find the number you have entered is odd or even (using if).

// var enteredNumber = +prompt("Enter the Number");
// if (enteredNumber % 2 === 0) {
//     console.log(enteredNumber + " is Even Number");
// }
// else{
//     console.log(enteredNumber + " is odd Number");
// }

//! 5). Fruit Shop Billing Program.
//*INSTRUCTIONS:
//* Write a program where you're buying 2 items but the items rate would be same , then create full bill of total items which you bought.

// var orangePrice = +prompt("Enter Your first Item");
// var bananaPrice = +prompt("Enter Your Second Item");
// var totalPrice = orangePrice + bananaPrice;
// console.log(`The total price of both:  ${totalPrice}`);

//! 6). Traffic lights Response Program.

//*INSTRUCTIONS:
//* Write a traffic lights program where someone enter Red (stop),Yellow(get ready), Green(Go).

// var trafficLight = prompt("Enter the color:");
// if (trafficLight === "Red"){
//     console.log("Stop 🔴");
// }
// else if (trafficLight === "Yellow"){
//     console.log("Get Ready 🟡")
// }
// else if (trafficLight === "Green"){
//     console.log("GO 🟢")
// }
// else{
//     alert("Sorry! invalid color")
// }

//! Customer Discount program:

//* INSTRUCTIONS:
//* Make program that checks if a customer wants to buy more than 10 items.if they do, they get 20% discount, if they want to buy between 5 to 9 items, would getting 10% discount and if they want to buy less than 5 items, they would getting no discount.

// var enteredItem = +prompt("How many items you wanna buy?");
// var discount;
// if (enteredItem >= 10){
//     console.log(`Congratulation! you got ${discount = 20}% discount.`);
// }

// else if (enteredItem >= 5){
//     console.log(`Congratulation! you got ${discount = 10}% discount. ` );
// }
// else{
//     console.log("Sorry! You have No discount.");
// }

//! Bank balance withdrawal program:

//* INSTRUCTIONS:
//* Make a variable named bankBalance and store your bank balance in it, then make another variable for withdrawal. If the bank balance is greater than or equal to the withdrawal amount, the bank will give you the money; otherwise, a message will appear.

// var bankBalance = 1000;
// var enteredAmount = +prompt("Enter your Balance:");
// var withdrawal = enteredAmount;

// if (enteredAmount <= bankBalance){
//     console.log(`You can withdrawal ${withdrawal}`);
// }

// else{
//     console.log("Sorry! you don't have sufficient balance to withdrawal.");
// }



let fruit = ["Mango", "Banana ", "Kiwifruit"];
let favorite = prompt("What's your favorite fruit?");

for( var fruitIndex = 0; fruitIndex < fruit.length; fruitIndex++) {
    if (favorite === fruit[fruitIndex]);
    console.log(favorite);
}