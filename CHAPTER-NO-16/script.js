"use strict";
//! Assigning values to The Empty Array:

let emptyArray = [];

// //* Assigning values:
// emptyArray[0] = "usman";
// emptyArray[1] = "Huzaifa";
// emptyArray[2] = "Ihsan";
// emptyArray[3] = "Sadia";
// emptyArray[4] = "kalsom";
// emptyArray[5] = "Hoor";

// console.log(emptyArray);

//* another case if i assign the numbers from 3, 4, 5, 6.. then if i a wanna print 0, 1, 2 then it'll giving me UNDEFINED.
//! Not: When you don't have any element or index on the array and you can try to print that index it'll giving you UNDEFINED.
// emptyArray[3] = "hello";
// emptyArray[4] = "How";
// emptyArray[5] = "are";
// emptyArray[6] = "you";

// console.log(emptyArray[1]);

//! REMOVING, REPLACING AND ADDING ELEMENTS IN THE EXISTING ARRAY ELEMENTS.

let emojis = ["Smiley 😃", " joy 😂", " Yum 😋", " Satisfied 😆", " Thinking 🤔"];
// console.log(`Before Pop: ${emojis} `);
// console.log(`Before Replacing Elements: ${emojis}`);
console.log(`Before Push Elements: ${emojis}`);

//! Removing Elements:
//* POP is the keyword through which we can remove the last element of the Array.
//*Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.

// emojis.pop();
// var popped = emojis.pop(); //? just to show which element is removed from the array that's why i store the removed element to print it. 
// console.log(`After the pop: ${emojis}`); 

//! Replacing the Existing elements in the Array:
//* add element at a specific position/index, it will replace already existing element
//* Here we are replacing the (joy) which is on index 1 (in Array index start from zero) and (Satisfied) which is on index 3.


// emojis[1] = "disappointed 😥";
// emojis[3] = "Confused 😕";
// console.log(`After Replacing Elements: ${emojis}`);

//! Adding new elements to the existing Array:
//* Push is the keyword which is used to add elements into array after last element in the array.
//*Appends new elements to the end of an array, and returns the new length of the array.

// emojis.push("Mango 🥭", "orange 🍊");
// console.log(emojis);


