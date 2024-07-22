"use strict";

//! SHIFT METHOD, UNSHIFT METHOD, SPLICE METHOD, SLICE METHOD
//! SHIFT METHOD:
//* Use the shift method to remove an element from the beginning of an array.

// var myAssets = ["Car 🚗", "Air plan ✈️", "Bike 🚲", "Helicopter 🚁" ];
// myAssets.shift(); //* it'll show you all the array elements except removed element.
// console.log(myAssets);

// var shiftedElement = myAssets.shift();  //* now this statement will just show you the removed element .
// console.log(shiftedElement);  //*  [Racing Car 🚗].

//! UNSHIFT METHOD:
//* To add one or more elements to the beginning of an array, use the unshift method.
//*Inserts new elements at the start of an array, and returns the new length of the array.

// var peshawarZoo = ["Lion 🦁","leopard 🐆", "Gorilla 🦍", "Monkey 🐒"];

// peshawarZoo.unshift("Tiger 🐅", "Deer 🦌");  
// console.log(peshawarZoo);    //* ['Tiger 🐅','Deer 🦌','Lion 🦁','leopard 🐆','Gorilla 🦍','Monkey 🐒'].
// console.log(peshawarZoo.unshift()); //* this statement will show un the total index of the array (here is 6).


//! SPLICE METHOD:
//* Use the splice method to insert one or more elements anywhere in an array, while
//* optionally removing one or more elements that come after it.
//* The zero-based location in the array from which to start removing elements.
//* Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
//* Returns — An array containing the elements that were deleted.

// var myAllTimeFavoriteTeam = ["Sead Anwar", "Unis Khan", "Imzimam Ul Haq", "Imran Khan (C)", "Shoaib Akhter", "Waseem Akram", "Waqar Unis", "Umer Gull", "Muhammad Aamir"];
// console.log(`Before Splice: ${myAllTimeFavoriteTeam}`);

//? NOTE: here in the below line 38 (2, 0, "Mu.....") means that after index 2 Muhammad Rizwan will add and 0 means nothing will remove from the array on index 2. if you replace 0 with any other number like one 1 then it'll remove after index 2 element (Imran khan) .

// myAllTimeFavoriteTeam.splice(2, 0, "Muhammad Rizwan (Wk)");
// console.log(`After Splice: ${myAllTimeFavoriteTeam}`);

//* OR you can just remove any element anywhere in array

var spliced = myAllTimeFavoriteTeam.splice(4, 4,); //* This Statement mean that after 4 index the next 2 elements (5 = waseem & 6 = waqar) rm.
console.log(myAllTimeFavoriteTeam);

//! SLICE METHOD:
//* Slice method is used to extract or replace the existing elements of the array.
//* After extracting the elements from array then it automatically store in NEW array (sliced array).



