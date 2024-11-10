"use strict";

//! ARRAY --> ?
//* Array is like variable or you can say a container which holds (store) multiple values at a time.
//* it's a collection of contiguous memory location and it's allows you to store multiple values in single variable.
//? Contiguous memory: ====> | 10 | 20 | 30 | 40 |
//? Non-Contiguous Memory: ====> | 10 | ... | 20 | ... | 30 | ... | 40 |
//* Each value is identify by index , in arrays the index is starting from (0,1,2,3.......).

//! why we are using array ?
//* we are using array when we need to store multiple values, so if we are creating multiple variables. then it would very time consumption.

//! Example:

// let fruit0 = "Banana 🍌";
// let fruit1 = "Mango 🥭";
// let fruit2 = "Peach 🍑";
// let fruit3 = "kiwi_fruit 🥝";

//* you can see that we made 4 separate variables for each fruit so for this problem the programers introduced the Arrays concept.

//! ARRAY DECLARATION

// let myFirstArray = [];     //? This is an empty Array.
// console.log(myFirstArray);

//! STORING MULTIPLE VALUES IN ARRAY (EMOJIS):

// let fruitShop = ["Banana 🍌🍌🍌🍌🍌🍌", "Mango 🥭🥭🥭🥭🥭🥭🥭", "Peach 🍑🍑🍑🍑🍑🍑🍑 ", "kiwi_fruit 🥝🥝🥝🥝🥝🥝" ];
// let sportsShop = ["Tennis Ball 🥎🥎🥎🥎🥎", "Basket Ball 🏀🏀🏀🏀🏀🏀", "volleyball 🏐🏐🏐🏐🏐🏐"];

//* whole array access (print)
// console.log(fruitShop);
// console.log(sportsShop);

//* You can also access any specific array elements like 
//! it will printing Peach because in array index start from zero  (0,1,2,3,4.....)

console.log(fruitShop[2]);

//* You can also check the length of the array like 

// console.log(sportsShop.length);

//! PRACTICE QUESTIONS:
//? Q_No-1
//*Fruits List:
//* Declare an array named fruits containing the following fruits: "Apple", "Banana", "Cherry", "Date", and "Elderberry".
//* Print the entire array to the console.

//  let fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
//  console.log(fruits);

//? Q_No.2
//*Student Names:
//*Declare an array named students with the names: "Muhammad", "Waqas", "Huzaifa", "Mehtab Alam", and "Usman".
//*Print the third name in the students array to the console.

// let students = ["Muhammad", "Waqas", "Huzaifa", "Mehtab Alam", "Usman"];
// console.log(students[2]);

//? Q_No.3
//* Shopping Cart:
//* Create an array named shoppingCart containing these items: "Milk", "Bread", "Eggs", "Butter", and "Cheese".
//* Print the first and the last item in the shoppingCart array to the console.

// let shoppingCart = ["Milk", "Bread", "Eggs", "Butter", "Cheese"];
// console.log(`First: ${shoppingCart[0]}`);
// console.log(`The total length of the array as: ${shoppingCart.length}`);
// console.log(`Last: ${shoppingCart[shoppingCart.length - 1]}`);

//? Q_No.4
//* Daily Temperatures:

//* Declare an array named temperatures for a week with the following values: 72, 75, 79, 80, 73, 78, and 74.
//* Print the entire array to the console.

// let temperatures = [ 72, 75, 79, 80, 73, 78, 74];
// console.log(temperatures);

//? Q_No.5
//* Favorite Movies:

//* Create an array called movies with your five favorite movie titles.
//* Print the total number of movies in the movies array to the console using the length property.

// let myFavoriteMovies = ["leo", "Wish Dragon", "Lolita", "Red Ant", "Sheeba"];
// console.log(myFavoriteMovies.length);