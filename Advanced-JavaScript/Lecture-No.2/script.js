//?=========================== Enhanced object literals =================================//

//!---------------------- IMPORTANT POINTS -------------------------//

//! 1).
//* 1). if we wanna use the name of the variables as an key of the object then we would write (both obj key and variable name same which we're assigning to the key).

// let name = "usman"
// let age = 21

//* Before ES6 version
// let obj1 = {
//     name: name,
//     age: age
// }
// console.log(obj1)  //* { name: 'usman', age: 21 }

//* After ES6 version

// let obj1 = {
//     name,
//     age
// }
// console.log(obj1);  //* { name: 'usman', age: 21 }

//! 2).
//*    use variable as a property Name of object (key)

// let n = "Name"
// let a = "Age"
// let obj = {
//     [n] : "Muhammad Usman",
//     [a] : 21
// }

// console.log(obj); //* { Name: 'Muhammad Usman', Age: 21 }
// console.log(obj.Name);

//! 3).
//* New function syntax 

//* Before E6

// let greeting = {
    
//     p1: "How are you?",
//     p2: "i'm fine, what about you",
//     details: function () {
//         return `Q1: ${this.p1} , Ans: ${this.p2}, Q2: ${this.p1} Ans: ${this.p2}`
//     }
// }
// console.log(greeting);
// console.log(greeting.details());

//* After Es6

// let greeting1 = {
    
//     p1: "How are you?",
//     p2: "i'm fine, what about you",
//     details() {
//         return `Q1: ${this.p1} , Ans: ${this.p2}, Q2: ${this.p1} Ans: ${this.p2}`
//     }
// }

// console.log(greeting1.details());

//! 4).

//* You can also give space in object method (function) using bicticts (``)

// let obj1 = {
//     [`detail Of Student`](){
//         return {
//             name: "hello",
//             age: 20,
//             profession: "web development",
//         }

//     }
// }

// console.log(obj1[`detail Of Student`]());


//?================================= Iterator function and For of ================================//

//* WHAT IS ITERATOR 
//* An iterator in JavaScript is an object that helps you traverse a collection, one element at a time,
//*  using its next() method. Each call to next() returns an object with two properties:

//* value: The current element.
//* done: A boolean indicating if the iteration is complete.


// let arry = [10, 20, 30, 40]

// let iterateArry = arry[Symbol.iterator]();

// console.log(iterateArry.next());
// console.log(iterateArry.next());
// console.log(iterateArry.next());
// console.log(iterateArry.next());
// console.log(iterateArry.next());

//* iterator using with string
// let iterateStr = "Manzoor Pashteen"
// let iteratedStr = iterateStr[Symbol.iterator]();
// console.log(iteratedStr.next().value); 
// console.log(iteratedStr.next().value)
// console.log(iteratedStr.next().value)
// console.log(iteratedStr.next().value)

//?==================================== ITERATOR Object (custom Iterator) ===========================//

//* Example:

// function iterator(array) {
//     // console.log(array);
//     let count = 0

//     return {
//         next(){
//             if(count < array.length) {
//                 return {value: count++, done: false }
//             }
//             else {
//                 return {value: undefined, done: true}
//             }
//         }
//     };
    
// }
// let array = [1, 2, 3, 4, 5]
// let iterate = iterator(array)
// console.log(typeof iterate);
// console.log(iterate.next().value)
// console.log(iterate.next().value)
// console.log(iterate.next().value)
// console.log(iterate.next().value)
// console.log(iterate.next().value)
// console.log(iterate.next())



//? Some Questions on ITERATOR


//* Dynamic List Iterator:
//* Create an iterator that takes an array and only returns the odd-indexed elements.

// function createOddIndexIterator(array) {
//     return {
//         currentIndex: 1, // Start at the first odd index
//         next() {
//             if (this.currentIndex < array.length) {
//                 const value = array[this.currentIndex];
//                 this.currentIndex += 2; // Move to the next odd index
//                 return { value, done: false };
//             }
//             return { value: undefined, done: true }; // End of iteration
//         }
//     };
// }

// const array = [10, 20, 30, 40];
// const iterator = createOddIndexIterator(array);

// console.log(iterator.next()); // { value: 20, done: false }
// console.log(iterator.next()); // { value: 40, done: false }
// console.log(iterator.next()); // { value: undefined, done: true }

//* Design an iterator that iterates over an array in reverse order (from the last element to the first).


//* Filtered Iterator:
//* Build an iterator that skips all elements less than 10 in a given array.

// function createFilteredIterator(array) {
//     return {
//         currentIndex: 0,
//         next() {
//             // Complete the logic to skip numbers < 10
//         }
//     };
// }

// const array = [5, 15, 8, 20];
// const iterator = createFilteredIterator(array);

// console.log(iterator.next()); // Should give 15
// console.log(iterator.next()); // Should give 20


//* Chained Iterators:
//* Create two iterators: one for numbers and another for strings. Combine them into a single iterator that alternates between the two collections.


//* Count and Stop:
//* Create an iterator that counts numbers starting from 1 but stops after a user-defined limit (e.g., stop at 50).



//?========================= GENERATORS =================================//

//* A generator function in JavaScript is a special type of function that can pause and resume its execution.
//* It is defined using the function* syntax and produces a sequence of values when iterated
//* Generator function is denoted by "*" after function Keyword.
//* There's using "yield" keyword for pausing (stope) the execution of the function.
//* There is also the "Return" Keyword which end the function"

//? Use Case:
//* when you wanna make infinite loop 
//* creating new id's

//* simple Example:

// function *greeting() {
//     let name = "Usman"
//     let sayHi = "Asalam.o.Alikom"
//     yield 1;
//     console.log(`${sayHi} ${name}!`);
// }
// let greet = greeting()
// console.log(greet.next().value);
// console.log(greet.next().value);



//? Generator Practice Questions
//*Prime Number Generator:
//* Write a generator that yields prime numbers indefinitely.

//* Pagination Simulation:
//* Create a generator that simulates fetching items in batches of a fixed size from an array until all items are retrieved.

//* Tree Traversal:
//* Use a generator to traverse a nested object or tree structure and yield all the leaf nodes.

//* Lazy Fibonacci Sequence:
//* Write a generator that yields Fibonacci numbers up to a given limit.

//* Repeating Sequence:
//* Write a generator that repeats a given sequence (e.g., [1, 2, 3]) infinitely.

//?========================================= MAP ====================================================//

//*Create a Map to track the number of times a user visits a page. Each time a user visits, update the Map with their name as the key and their visit count as the value.

// function countWords(text) {
//     const wordMap = new Map();
//     const words = text.toLowerCase().replace(/[^\w\s]/g, '').split(' ');

//     for (const word of words) {
//         if (wordMap.has(word)) {
//             wordMap.set(word, wordMap.get(word) + 1);
//         } else {
//             wordMap.set(word, 1);
//         }
//     }
//     return wordMap;
// }

// const result = countWords("Hello world! Hello everyone.");
// console.log(result); // Map { "hello" => 2, "world" => 1, "everyone" => 1 }

//*This question updates the count of visits for each user. It keeps a running total for every user's visits. For example:

// Input: ["Alice", "Bob", "Alice"]
// Output: Map { "Alice" => 2, "Bob" => 1 }

// function trackVisits(visits) {
//     const visitMap = new Map();

//     for (const user of visits) {
//         if (visitMap.has(user)) {
//             visitMap.set(user, visitMap.get(user) + 1);
//         } else {
//             visitMap.set(user, 1);
//         }
//     }
//     return visitMap;
// }

// const visits = ["Alice", "Bob", "Alice"];
// const result = trackVisits(visits);
// console.log(result); // Map { "Alice" => 2, "Bob" => 1 }

