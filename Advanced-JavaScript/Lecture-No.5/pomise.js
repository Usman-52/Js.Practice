"use strict";
//?========================================= Callback Hell Functions =======================================//
 //* What's is Callback Hell ?

 //* callback hell is also called nest Callback function, which stacked below one another , forming a pyramid structure (pyramid of Doom)

 //* this style of programming becomes difficult to understand & manage.

 //? Example:

//*  we have need to print the data after some sort of time

// let printData = (data, nextData) => {
//     setTimeout( () => {
//         console.log(data);
//         if(nextData){
//             nextData()
//         }
//     },2000)
//     return data
// }

// printData(100, () => {
//     console.log("Getting Data2....");
//     printData(200, () => {
//         console.log("Getting Data3....");
//         printData(300, () =>{
//             console.log("Getting Data4....");
//             printData(400)
//         })
//     })
// })

//! Note: it's very complicated to understand so Promise comes in javaScript
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

// let promise1 = new Promise(function(resolve, reject) {
//     setTimeout(() => {
//         console.log("Async is completed!");
//         resolve();
//     },1000)
// });
// promise1.then(() => {
//     console.log("Promise is used");
// })

//* OR



// new Promise( (resolve, reject) => {
//     setTimeout( () => {
//         console.log("Async No.2 is completed!");
//         resolve()
//     }, 3000)
// }).then( () => console.log("Task is resolved"))

//?=============================== Passing data into Resolve ===============================//


// let promise3 = new Promise( (resolve, reject) => {
//     setTimeout( () =>{
//         resolve({userName:"Muhammad Usman", userEmail: "dove663@gmail.come"})
//     }, 2000)
// })
// promise3.then( (userData) => {
//     console.log(userData);
// })

//?============================ Promise using Catch and final ==============================//

// let promise4 = new Promise ( (resolve, reject) => {
//     let error = false //* Simulating an error condition
//     if (!error){
//          //* If there's an error, reject the promise with an error message
//         resolve ({userEmail: "dove663@gmail.com" , userPassword: 1234}) 
//     }else{
//          //* If there's an error, reject the promise with an error message
//         reject("Sorry! Something Went Wrong")
//     }
// }, 2000)

// //* // Access and return the user's email from the resolved object The first `then` runs when the promise is resolved successful

// promise4.then( (userRecord) => {
//     return userRecord.userEmail //* Access and return the user's email from the resolved object
// })
// .then( (userEmail) =>{
//      //* The second `then` receives the returned value (user's email) from the previous `then`
//     console.log(`User Email: ${userEmail}`);
// })
// .catch( (error) => {
//     console.log(`Error: ${error}`);           //* The `catch` block runs when the promise is rejected and handles the error
// })
// .finally(() => {
    
//     console.log("Promise has been handled.");   //* Executes regardless of resolve or reject
// });

//?================================== Call API using Promise and Fetch ==============================//

// let promise5 = new Promise( (resolve, reject) => {
//     let error = true
//     if (!error) {
//         resolve(fetch('https://dummyjson.com/users'))
//     }
//     else{
//         reject("Sorry! something went Wrong.")
//     }
// }, 2000)

// .then( (response) => {
//     return response.json()
// }).then( (data) => {
//     console.log(data)
// }).catch((error) => {
//     alert(error)
// })

//!=================================== Async ===============================================//

//? What's Synchronous ?
//* Synchronous means the code runs in a particular sequence of instructions given in the program.
//* Each instruction waits for the previous to complete it's execution.

//? Example:

// console.log(100); //* first 100 will print 
// console.log(200); //* 2nd 200 will print
// console.log(300); //* 3rd 300 will print 

//* Each instruction will wait for upper instruction to execute then the next will execute, even the upper get delay the next will also waiting for the upper to execute.


//? What is Asynchronous ?
//* Due to synchronous programming , sometimes important instructions get blocked (waite) due to some previous instructions, which causes a delay in UI.

//* Asynchronous code execution allows to execute next instructions immediately and doesn't block the flow.

// ? Example:

// console.log(100); //* here 1st 100 will print

//* it's Async so the other instruction don't need to wait for it to execute so 200 print on 3rd number not on second number.

// setTimeout(() => {  
//     console.log(200); 
// },5000)

// console.log(300); //* 2nd 300 will print 



// async function record() {
//     let response = await fetch('https://dummyjson.om/users')
//     return response.json()
// }

// record().then( (data) => {
//     console.log(data);
// }).catch( (error) => {
// console.log(error.message)
// });

//* OR:

async function record() {
    try {
        let response = await fetch('https://dummyjson.com/users')
    return response.json()
    } catch (error) {
        console.log(error.message)
    }
}

record().then( (data) => {
    console.log(data);
})