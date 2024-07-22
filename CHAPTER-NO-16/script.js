"use strict";

//! PUSH, POP, REPLACING ELEMENTS.
//! Assigning values to The Empty Array:

// let emptyArray = [];

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

// let emojis = ["Smiley 😃", " joy 😂", " Yum 😋", " Satisfied 😆", " Thinking 🤔"];
// console.log(`Before Pop: ${emojis} `);
// console.log(`Before Replacing Elements: ${emojis}`);
// console.log(`Before Push Elements: ${emojis}`);

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

//! BASIC POP AND PUSH EXAMPLE:

//* Problem 1: Basic Push and Pop
//* Instructions:

//* Create an empty array called numbers.
//* Push the numbers 1 through 5 onto the array.
//* Pop the last element from the array and store it in a variable called lastElement.
//* Print the array and the lastElement.

// var numbers = [];
// numbers.push(1, 2, 3, 4, 5);
// var lastElement = numbers.pop();
// console.log(numbers);
// console.log(lastElement);



//* Problem 2: Stack Implementation
//* Instructions:

//* Create an empty array called stack.
//* Push the following elements onto the stack in this order: "a", "b", "c", "d", "e".
//* Pop three elements from the stack and store them in a new array called poppedElements.
//* Print the stack and poppedElements arrays.

// var stack = [];
// stack.push("a", "b", "c", "d", "e");
// var poppedElements = [];
// poppedElements.push(stack.pop());
// poppedElements.push(stack.pop());
// poppedElements.push(stack.pop());
// console.log("Stack: ",stack);
// console.log( "Popped Elements: ",poppedElements);

//* Problem 3: Simulating Undo Functionality
//* Instructions:

//* Create an empty array called actions.
//* Push the following actions onto the array: "draw circle", "draw square", "erase circle", "draw triangle".
//* Simulate an undo operation by popping the last action and storing it in a variable called lastAction.
//* Print the actions array and the lastAction.

// var actions = [];
// actions.push("Draw Circle", "Draw Square", "Erase Circle", "Draw Triangle");
// var lastAction = actions.pop();
// console.log("Acton: ", actions )
// console.log("Last Action: ",lastAction);


//* Problem 4: Grocery List Management
//* Instructions:

//* Create an empty array called groceryList.
//* Push the following items onto the grocery list: "milk", "bread", "eggs", "butter".
//* Realize that you have enough butter and pop it from the list.
//* Add "cheese" to the list using push.
//* Print the final groceryList.

// var groceryList = [];
// groceryList.push("Milk", "Bread", "Eggs", "Butter");
// groceryList.pop();
// groceryList.push("Cheese");
// console.log("Final Grocery List is: ", groceryList);


//* Problem 5: Limited Stack Size
//* Instructions:

//* Create an empty array called limitedStack.
//* Push elements onto the stack: 1, 2, 3, 4, 5.
//* Ensure the stack size does not exceed 3 elements. If it does, pop elements until the size is 3.
//* Print the limitedStack array.

// var limitedStack = [];
// limitedStack.push(1, 2, 3, 4, 5);
// limitedStack.pop();
// limitedStack.pop();

// //* OR

// while (limitedStack.length > 3) {
//     limitedStack.pop();
// }

// console.log("Limited Stock is: ", limitedStack)

//* Problem 6: Browser History Navigation
//* Instructions:

//* Create an empty array called history.
//* Push the following URLs onto the history array: "page1.html", "page2.html", "page3.html".
//* Simulate the user clicking the back button by popping the last URL.
//* Print the history array and the URL the user navigated back to.

// var history = [];
// history.push("page-1.html", "page-2.html", "page-3.html", "page-4.html");
// var lastPage = history.pop();
// console.log("History: ", history);
// console.log("Last Visited Page: ", lastPage);


//* Problem 7: Task Management System
//* Instructions:

//* Create an empty array called tasks.
//* Push the following tasks onto the array: "wash dishes", "vacuum floor", "do laundry", "buy groceries".
//* Pop two tasks from the array as they are completed and store them in a completedTasks array.
//* Print the tasks and completedTasks arrays.

// var tasks = [];
// tasks.push("Wash Dishes","Vacuum Floor", "Do Laundry", "Buy Groceries" );
// var completedTasks = [];
// completedTasks.push(tasks.pop());
// completedTasks.push(tasks.pop());
// console.log("Tasks: ", tasks);
// console.log("Completed Tasks", completedTasks);

//* Problem 8: Meeting Schedule
//* Instructions:

//* Create an empty array called meetings.
//* Push the following meetings onto the array: "10 AM with Mehtab Alam", "1 PM with Gull Khan", "3 PM with Charlie".
//* The meeting with Charlie is canceled, pop it from the array.
//* Add a new meeting at 4 PM with Bakhti-Rehman.
//* Print the meetings array.

// var calledMeetings = [];
// calledMeetings.push("10 Am with Bodagy", "1 PM with Gull khan", "3 PM with Charlie Chaplin");
// calledMeetings.pop();
// calledMeetings.push("4 PM with Bakhti-Rehman");
// console.log("Called Meetings: ", calledMeetings)




//* Problem 9: Book Stack
//* Instructions:

//* Create an empty array called bookStack.
//* Push the following books onto the stack: "Book A", "Book B", "Book C".
//* Realize you want to read the last book first, so pop it and store it in a variable called nextRead.
//* Print the bookStack and nextRead.


// var bookStock = [];
// bookStock.push("Book A", "Book B", "Book C");
// var nextRead = bookStock.pop();
// console.log("Book Stock: ", bookStock);
// console.log("Next Read: ", nextRead);

//* Problem 10: Playlist Management
//* Instructions:

//* Create an empty array called playlist.
//* Push the following songs onto the playlist: "Song 1", "Song 2", "Song 3".
//* Simulate the end of the playlist by popping each song until the playlist is empty.
//* Print the playlist after each pop operation.

// var playlist = [];
// playlist.push("Song1", "Song2", "Song3");
// playlist.pop();
// playlist.pop();
// playlist.pop();

//  //* OR

// while (playlist.length) {
//     playlist.pop();
// }

// console.log("Play List is Empty:", playlist);


//! five tricky questions about the push and pop methods in JavaScript that can be asked in interviews:

//* Question 1: Handling Edge Cases
//* Question: What will be the output of the following code snippet, and why?



// var arr = [];
// var poppedElement = arr.pop();
// console.log(poppedElement);
// console.log(arr.length);

// *Answer:

// *poppedElement will be undefined because pop returns undefined when called on an empty array.
//* arr.length will be 0 because the array was empty to begin with, and calling pop on an empty array does not change its length.
//* Question 2: Push Return Value
//* Question: What does the push method return, and how can it be used in practice?

//* Answer:

//* The push method returns the new length of the array after the elements have been added. This can be used to quickly check the new 
//* size of the array.

//* Example:


// var arr = [1, 2, 3];
// var newLength = arr.push(4, 5);
// console.log(newLength); // 5

//* Question 3: Push and Pop Performance
//* Question: Discuss the time complexity of the push and pop operations on an array in JavaScript. Are these operations efficient, and why?

//* Answer:

//* Both push and pop operations have an average time complexity of O(1), which means they are very efficient. This is because both operations involve adding or removing elements from the end of the array, which does not require shifting elements as would be the case for operations at the beginning or middle of the array.

//* Question 4: Combining Push and Pop
//* Question: What will be the output of the following code snippet, and why?


// var arr = [1, 2, 3];
// arr.push(arr.pop());
// console.log(arr);

//* Answer:

//* The output will be [1, 2, 3]. Here's the explanation:
//* arr.pop() removes the last element (3) from the array and returns it.
//* arr.push(arr.pop()) pushes the returned element (3) back onto the end of the array.
//* Thus, the array remains unchanged.


//* Question 5: Nested Arrays with Push and Pop
//* Question: Given the following code, what will be the output and why?


// var arr = [1, [2, 3], 4];
// arr[1].push(5);
// var poppedElement = arr[1].pop();
// console.log(arr);
// console.log(poppedElement);

//*Answer:

//*The arr will be [1, [2, 3], 4] after the operations because the nested array [2, 3] was modified in place by push and pop.
//*poppedElement will be 5 because it was the last element added to the nested array and then removed by pop.
