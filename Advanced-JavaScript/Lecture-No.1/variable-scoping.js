//* VARIABLE SCOPING
//*Explain the difference between global and local scope in JavaScript. How are variables accessed in each scope?

// let globalStr = "i'm a global string"

// function testScope() {
//     let localStr = "i'm a local string"
//     console.log(localStr)
// }
// testScope()

// console.log(globalStr);

//* How does function scope differ from block scope, and which keywords respect block scope?

// var name1 = "usman"

// function scopeTest() {
//     var name1 = "Hello world"
//     console.log(name1);
// }

// console.log(name2) //* it can't be access out of the function because var is the function scope

//*  Closure 
// let greeting = "Hello Usman"
// function closer() {
//     const hi = "Welcome to you usman"
//     function inOne() {
//         console.log(hi)
        
//     }
//     console.log(greeting);
// }

//* Template lateral

// var email = "Hello\n  Usman"

// const email = `Hello, 
//  Muhammad Usman`

// console.log(email);

//* Destructing 

// let myArry1 = ["Usman, 33, Web developer"]
// const [name, age, profession ] = myArry1

// console.log(name, age, profession);

// let myObj = {
//     name: "Muhammad",
//     age: 33,
//     profession: "web developer"
// }

// const {name, age, profession} = myObj

// console.log(age)

//* Default parameter

// function testDefault(name = , age = ) {
//     console.log(name, age)
// }

// testDefault() 

//* Rest parameter

const Arry = ["usman", 30 , "ehllo", ["faisal", 20, "hello"], ["faisal", 20, "hello"], ["faisal", 20, "hello"] ]

console.log(Arry.flat())



