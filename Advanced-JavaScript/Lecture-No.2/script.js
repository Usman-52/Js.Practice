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

let greeting = {
    
    p1: "How are you?",
    p2: "i'm fine, what about you",
    details: function () {
        return `Q1: ${this.p1} , Ans: ${this.p2}, Q2: ${this.p1} Ans: ${this.p2}`
    }
}
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


//?================================= Iterator and For of ================================//

// let arry = [10, 20, 30, 40]

// let iterateArry = arry[Symbol.iterator]();

// console.log(iterateArry.next());
// console.log(iterateArry.next());
// console.log(iterateArry.next());
// console.log(iterateArry.next());
// console.log(iterateArry.next());


