"use strict";

//!==================================== ARRAY METHODS ===========================//


//?=================================== Map Method ===============================//
//* Create a new array where each number from the original array is squared.

// let arry = [2, 3, 9, 7]
// let newArry = arry.map(element => element * 2)
// console.log(newArry);

//* Convert an array of strings to uppercase.

// let stdNames = ["khan", "Saad", "Mansoor"]
// let newStdName = stdNames.map()
// console.log(newStdName);


//?=================================== Filter Method ===============================//
//* Write a function to filter out all even numbers from an array.

// let mixedArray = [1, 3, 2, 6, 8, 9, 11, 12]
// let evenNum = mixedArray.filter((num) => num % 2 === 0)
// console.log(evenNum);

//* Filter out all words shorter than 4 characters.

// let words = ["Hello", "Hi", "Welcome", "sir", "MAM"]
// let newFilteredArry = words.filter((word) => word.length >= 5)
// console.log(newFilteredArry);

//* 3rd example:

// let books = [
//     {title: "Dewan", publication: 2000, genre: "History", edition: 2008},
//     {title: "7 Habits of Life", publication: 2004, genre: "Motivational", edition: 2019},
//     {title: "Baznama", publication: 2000, genre: "History", edition: 2008},
//     {title: "The Khushal Khan Khattak", publication: 2000, genre: "History", edition: 2008},
//     {title: "Iqbal Nama", publication: 2000, genre: "Hello", edition: 2008}
// ]

// let book = books.filter((bk) => bk.genre === "History")
// console.log(book);

//?==================================== Sort Methods ============================//

// let myArry = [1, 78, 20, 10, 30, 11]

// let sortedArry = myArry.sort((a, b) => (a-b))
//* OR
// let sortedArry = myArry.sort((a, b) => {
//     if (a > b) {
//         return 2;
//     }
//     return -2
// } );

// console.log(myArry)

//* Sort an array of strings alphabetically.

// let names = ["usman", "khan", "khattak", "Muhammad", "Haseeb", "Afnan"]
// // let names = ['b', "c", "a", "h", "e"]
// let sorted = names.sort()
// console.log(sorted);




//?=================================== ForEach Method ===============================//
//* Write a function that prints each element of an array with its index in the format:
//* "Element at index 0 is 5".
//*Example Input: [5, 10, 15]
// let arr = [10, 15, 20, 25, 30]
// arr.forEach( (num, index) => {
//     console.log(index, num)
// })



//* Given an array of numbers, print whether each number is odd or even.

//?=================================== Concat Method ===============================//
//* Merge two arrays of numbers.
// let arr1 = [1, 2, 3]
// let arr2 = [10, 20, 30]
// let newArr3 = arr1.concat(arr2)
// console.log(newArr3);

//* Combine two arrays of strings into one.

//?=================================== Every Method ===============================//
//* Check if all numbers in an array are positive.
//* Example Input: [1, 2, 3, -4]   ,Expected Output: false

// let checkPositive = [1, 2, 3, 4, -5]
// let checked = checkPositive.every( (num) => num > 0)
// console.log(checked);


//* Check if all words in an array start with an uppercase letter.
//* Example Input: ["Hello", "World", "Hi"]
//* Expected Output: true




//?=================================== Some Method ===============================//
//* Check if at least one number in the array is negative.
//* Example Input: [4, -5, 6]
//* Expected Output: true

// let checkNegative = [10, -20, 30]
// let checked1 = checkNegative.some( (num) => num < 0)
// console.log(checked1);



//* Check if any word in an array contains more than 5 letters.
//* Example Input: ["hello", "world", "hi"]
//* Expected Output: true



//?=================================== Include Method ===============================//
//* check if the array contains the number 7.
//* Example Input: [5, 7, 9]


//* Check if the array contains the string "hello".
//* Example Input: ["hi", "hello", "world"]

// let greetings  = ["Hello", "Asalam.o.Alikom", "Hi"]
// let read = greetings.includes("Asalam.o.Alikom")
// console.log(read);

//?=================================== Join Method ===============================//
//* Convert an array of strings into a sentence separated by spaces.
//* Example Input: ["Hello", "world"]
//* Expected Output: "Hello world"

// let strArr = ["Hello", "usman"]
// let newStrArr = strArr.join(".")
// console.log(newStrArr);

//* Join numbers in an array with a hyphen "-" as a separator.
//* Example Input: [1, 2, 3]
//* Expected Output: "1-2-3"




//?=================================== Reduce Method ===============================//
//* Find the sum of all numbers in an array.
//* Example Input: [1, 2, 3, 4]
//* Expected Output: 10
// let redArr = [10, 30, 40, 20]
// let newRedArr = redArr.reduce( (acc, currentValue) => {
//     return acc + currentValue
// },10)
// console.log(newRedArr);

//* Multiply all numbers in an array.
//* Example Input: [1, 2, 3, 4]
//* Expected Output: 24


//?=================================== Find Method ===============================//
//* Find the first number in an array greater than 10.
//* Example Input: [4, 8, 15, 2].
//* Expected Output: 15

// let first =  [4, 8, 15, 2]
// let get = first.find((num) => num > 10)
// console.log(get);

//* Find the first string in an array that starts with the letter "A".
//* Example Input: ["Bob", "Alice", "Andy", "Eve"]
//* Expected Output: "Alice"


//?=================================== FindIndex Method ===============================//
//* Find the index of the first number divisible by 3.
//* Example Input: [4, 10, 15, 20]
//* Expected Output: 2

// let index = [4, 10, 15, 20];
// let findIndex = index.findIndex((num) => num % 3 === 0);
// console.log(findIndex);



//* Find the index of the first word that ends with the letter "g".
//* Example Input: ["cat", "dog", "frog"]
//* Expected Output: 2



//?=================================== FindOf Method ===============================//
//* Question: Find the index of the first occurrence of the number 25 in an array. If not found, return -1.
//* Example Input: [10, 25, 30, 25]
//* Expected Output: 1

// let index = [10, 25, 30, 25];
// let findIndex = index.findIndex((num) => num === 25);
// console.log(findIndex); // Output: 1


//* Question: Find the index of the string "hello" in an array of strings.
//* Example Input: ["hi", "hello", "world"]
//* Expected Output: 1


//?=================================== Reverse Method ===============================//
//* Question: Reverse the order of elements in an array of numbers.
//* Example Input: [1, 2, 3, 4]
//* Expected Output: [4, 3, 2, 1]
// let arr = [1, 2, 3,]
// let reversedArr = arr.reverse()
// console.log(reversedArr); // Output: [4, 3, 2, 1]


//?=================================== Slice Method ===============================//
//* Extract the first three elements from an array.
//* Example Input: [1, 2, 3, 4, 5]



//* Get all elements of an array except the last two.
//* Example Input: [10, 20, 30, 40, 50]



//* Question: Reverse the characters in a string by converting it to an array first.
//* Example Input: "hello"
//* Expected Output: "olleh"
//?=================================== Push Method ===============================//
//* Question: Add a new number to the end of an array and print the updated array.
//* Example Input: [10, 20, 30], Add: 40
//* Expected Output: [10, 20, 30, 40]



//* Question: Add multiple elements to an array of strings and return the new length of the array.
//* Example Input: ["apple", "banana"], Add: "cherry", "date"
//* Expected Output: 4



//?=================================== Pop Method ===============================//
//* Question: Remove the last element from an array and print the removed element.
//* Example Input: [5, 10, 15, 20]
//* Expected Output: 20



//* Question: Use pop() to empty an array by removing all elements in a loop.
//* Example Input: [1, 2, 3, 4]
//* Expected Output: []


//?=================================== Shift Method ===============================//
//* Question: Remove the first element from an array of numbers and print the updated array.
//* Example Input: [100, 200, 300]
//* Expected Output: [200, 300]



//* Question: Use shift() to repeatedly remove the first element from an array until it's empty. Print the array at each step.
//* Example Input: [1, 2, 3, 4]
//* Expected Output: [2, 3, 4], [3, 4], [4], []



//?=================================== UnShift Method ===============================//
//* Question: Add a new element at the beginning of an array of strings.
//* Example Input: ["cat", "dog"], Add: "elephant"
//* Expected Output: ["elephant", "cat", "dog"]



//* Question: Use unshift() to add multiple numbers to the start of an array and print the new length.
//* Example Input: [5, 10], Add: 1, 2, 3
//* Expected Output: 5



//?=================================== Splice Method ===============================//
//* Remove 2 elements starting from index 1 in an array and return the removed elements.
//* Example Input: [1, 2, 3, 4, 5]



//* Insert "new" at index 2 in an array.
//* Example Input: ["a", "b", "c", "d"]



