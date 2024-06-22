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

//! BANK LOAN ELIGIBILITY
//* Create a program to check if a customer is eligible for a loan.
//* The eligibility criteria are based on their credit score and income level.

let yourCreditScore = +prompt("Enter your score:");
let yourIncome = +prompt("Enter your Income Amount:");

if (yourCreditScore > 800) {
    if (yourIncome > 50000) {
        console.log("Congratulations🥳 your loan is approved.");
    }
    else{
        console.log(`Sorry😥 we can't approve your loan, if your income was more than 50000 then we could approve your loan `);
    }
}

else if (yourCreditScore > 700 && yourCreditScore < 800) {
    if (yourIncome > 75000) {
        console.log("Congratulations🥳  your loan is approved.");
    }
    else{
        console.log("Sorry😥! we can't approve your loan, if your income was more than 75000 then we could approve your loan ");
    }
}
else{
    console.log("Sorry😞! your credit score is bellow the standard loan eligibility criteria.");
}



