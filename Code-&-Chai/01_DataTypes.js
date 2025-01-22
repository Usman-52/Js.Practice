"use strict";  //* our all code will run as a newer version of js code.

//* There are two Type of Data Types in Js

//* 1). Primitive Data Type: String, Number, Boolean, Null, undefined, symbol, bigInt



let score = 20 //* Number
let myString = "Usman" //* String
let greeting; //* String but undefined
let myBoolean = true //*  Boolean it can be true or false
let myNull = null //* type of null would be "object"
let myGreeting = undefined //* type = undefined
let id = Symbol("WAM-2323")
let anotherId = Symbol("WAM-2323") //* using for To make our value unique
//* etc

//* lets check the type of the Data variables which we declared

// console.log(typeof score);
// console.log(typeof myString);
// console.log(typeof greeting);
// console.log(typeof myBoolean);
// console.log(typeof (myNull));
// console.log(typeof (myGreeting));
// console.log(id);
// console.log(id == anotherId); //* False

//* Non Primitive Data Types: (Reference)
//* Array, object, Function

//* Array
// let myTeamMembers = ["Huzaifa", "kalsoom"]

//* Object
// let person = {
//     name: "Kalsoom",
//     age: "21",
//     profession: "Web Developer"
// }

//* Function

// let myFunc = function(){
//     console.log("hello my world");
// }

//*============================ Stack and heap Memory ==============================//

//* Primitive: = Stack = it'll just give the copy of the data 
//* Non Primitive = Heap = it'll change the data if you once changed 

//*EXAMPLE:  Stack

// let userName = "Muhammad Usman";
// let userName1 = userName; //* Here userName will just give the copy of the value to UserName1
// userName1 = "Helal" //*

// console.log(userName1);
// console.log(userName);

//* Example: Heap

// let student1 = {
//     name: "Muhammad Usman",
//     RegNo: "AUP-48-2023"
// }

// console.log(student1);

// let student2 = student1
// student2.name = "Helal"
// console.log(student1.name);
// console.log(student2.name);