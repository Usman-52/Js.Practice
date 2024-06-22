"use strict;"

//! Retail Discount Calculation:
//* 1). Define variables for customers loyalty level and total purchase.
//* 2). Check loyalty level to determine the discount percentage.
//* 3). Check the purchase amount thresholds to potentially increase the discount.
//* 4). Calculate the final discount amount based on the combined loyalty and purchase amount discounts.

// let loyaltyLevel = prompt("Add your loyalty level?");
// let purchaseAmount = +prompt("Enter your purchase amount:");

// if (loyaltyLevel === "Gold") {
//     discountPercentage = 0.15;
   
// }

// else if (loyaltyLevel === "Silver") {
//     discountPercentage = 0.10;
  
// }
// else if (loyaltyLevel === "Bronze") {
//     discountAmount = 0.05;
// }
// else{
//     discountAmount = 0;
    
// }

// if (purchaseAmount > 50000) {
//     discountAmount = purchaseAmount * (1 - discountPercentage);
// }

// //! BANK LOAN ELIGIBILITY
// //* Create a program to check if a customer is eligible for a loan.
// //* The eligibility criteria are based on their credit score and income level.

// let yourCreditScore = +prompt("Enter your score:");
// let yourIncome = +prompt("Enter your Income Amount:");

// if (yourCreditScore > 800) {
//     if (yourIncome > 50000) {
//         console.log("Congratulations🥳 your loan is approved.");
//     }
//     else{
//         console.log(`Sorry😥 we can't approve your loan, if your income was more than 50000 then we could approve your loan `);
//     }
// }

// else if (yourCreditScore > 700 && yourCreditScore < 800) {
//     if (yourIncome > 75000) {
//         console.log("Congratulations🥳  your loan is approved.");
//     }
//     else{
//         console.log("Sorry😥! we can't approve your loan, if your income was more than 75000 then we could approve your loan ");
//     }
// }
// else{
//     console.log("Sorry😞! your credit score is bellow the standard loan eligibility criteria.");
// }


//! AIRLINE TICKET PRICING
//*INSTRUCTIONS:
//* Develop a program to calculate the ticket price based on the customer's age and the time of booking.
//* Using nested else if 

// let yourAge = +prompt("Enter Your Age:");
// let bookingTime = prompt("Enter The Time:");


// let yourAge = 9;
// let bookingTime = "Morning";
// let ticketPrice = 10000;

// if (yourAge < 12) {
//     if (bookingTime === "Morning") {
//         discount =  0.5;  //* discount = 50% (0.5 in decimal) 
//         discountPrice = ticketPrice *(1 - discount);  //* discount Price = 10000 * (1 - 0.5), 10000 * 0.5 = 5000 (0.5)
//         console.log(`Congratulations🥳! you got ${discount}% discount and you would paying ${discountPrice} `);
//     }
//     else{
//         discount = 0.3;        //* discount = 30% (0.3 in decimal)
//         totalDiscount = ticketPrice * (1 - discount);      //* discount Price = 10000 * (1 - 0.3), 10000 * 0.3 = 7000 (0.7)
//         console.log(`Ohh🫢! you got ${discount}% discount and you would paying ${discountPrice} `);
//     }
// }
// else if (yourAge > 12 && yourAge < 65){
//     if (bookingTime === "Morning") {
//         discount = 0.1;         //* discount = 10% (0.1 in decimal)
//         totalDiscount = ticketPrice *(1 - discount);      //* discount Price = 10000 * (1 - 0.1), 10000 * 0.1 = 9000 (0.9)
//         console.log(`Ohh🫢! ${discount}% discount and you would paying ${discountPrice} `);
//     }
//     else{
//         console.log("ohh sorry😥 you got no discount.");
//     }
// }

// else{
//     if (bookingTime === "Morning") {
//         discount = 0.4;        //* discount = 40% (0.4 in decimal)
//         totalDiscount = ticketPrice * (1 - discount);      //* discount Price = 10000 * (1 - 0.4), 10000 * 0.4 = 6000 (0.6)
//         console.log(`Congratulation🥳! you got ${discount}% discount and you would paying ${discountPrice} `);
//     }
//     else{
//         discount = 0.2;        //* discount = 20% (0.2 in decimal)
//         totalDiscount = ticketPrice * (1 - discount);   //* discount Price = 10000 * (1 - 0.2), 10000 * 0.2 = 8000 (0.8)   
//         console.log(`Ohh🫢! you got ${discount}% discount and you would paying ${discountPrice}`);
//     }
// }


//! CAR RENTAL PRICING 
//* INSTRUCTIONS:
//* Develop a program to calculate the rental price for a car based on the car type and rental duration.

// let carType = prompt("Enter your Car Type:");
// let rentalDuration = +prompt("Enter For How many days would you like to take the car?");

// let carType = "Tesla";
// let perDayPrice;
// let rentalDuration = 10;
// if (carType === "Tesla") {
//     if (rentalDuration > 7) {
//         perDayPrice = 60;
//         console.log(`This is ${carType} car so your rent would be ${perDayPrice}$`);
//     }
//     else{
//         perDayPrice = 70;
//         console.log(`This is ${carType} car so your rent would be ${perDayPrice}$`);
//     }
// }

// if (carType === "Suzuki") {
//     if (rentalDuration > 7) {
//         perDayPrice = 50;
//         console.log(`This is ${carType} car so your rent would be ${perDayPrice}$`);
//     }
//     else{
//         perDayPrice = 55;
//         console.log(`This is ${carType} car so your rent would be ${perDayPrice}$`);
//     }
// }

// if (carType === "Mehran") {
//     if (rentalDuration > 7) {
//     perDayPrice = 40;
//     console.log(`This is ${carType} car so your rent would be ${perDayPrice}$`);
//     }
//     else{
//         perDayPrice = 45;
//         console.log(`This is ${carType} car so your rent would be ${perDayPrice}$`);
//     }
// }