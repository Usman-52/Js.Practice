"use strict";
//?========================================= Promise =======================================//


//*A Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation. It acts as a placeholder for the result of an operation that hasn’t completed yet.

//* Asynchronous Operation: which taking some time in completion  or execution (data base call, cryptography)

//* States of a Promise:

//* Pending: The initial state, meaning the operation is not yet complete.
//* Fulfilled (Resolved): The operation was successful, and the promise now has a resolved value.
//* Rejected: The operation failed, and the promise now has a reason (error) for the failure.

//* Key Features:

//* then(): Executes when the promise is fulfilled (resolved).
//* catch(): Executes when the promise is rejected.
//* finally(): Executes regardless of whether the promise is resolved or rejected.


//* Use Case Example: If you're fetching data from an API (an asynchronous task), a promise allows you to handle   the response or error once the API call is complete.

//? Example:

let promise1 = new Promise(function(resolve, reject) {
    setTimeout(() => {
        console.log("Async is completed!");
        resolve();
    },1000)
});
promise1.then(() => {
    console.log("Promise is used");
})

//* OR



new Promise( (resolve, reject) => {
    setTimeout( () => {
        console.log("Async No.2 is completed!");
        resolve()
    }, 3000)
}).then( () => console.log("Task is resolved"))

//?=============================== Passing data into Resolve ===============================//


let promise3 = new Promise( (resolve, reject) => {
    setTimeout( () =>{
        resolve({userName:"Muhammad Usman", userEmail: "dove663@gmail.come"})
    }, 2000)
})
promise3.then( (userData) => {
    console.log(userData);
})



