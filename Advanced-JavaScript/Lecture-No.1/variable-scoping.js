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

//? write a function that takes any number of arguments and returns the sum of only the even numbers provided?
//? Use the rest parameter to handle the arguments.

// let sumOfEvenNumbers = (...args) => {
//     console.log(args)             //* show us the arguments in Arry
//     let sum = 0;
    
//     for(let num of args) {
//         if(num % 2 === 0){
//             sum += num;
//         }
        
//     }
//     console.log(`Sum of the Even number is : ${sum}`);
// }
// sumOfEvenNumbers(23, 22, 1, 2, 4, 10)

//? Create a function that accepts a student’s name, age, and any number of hobbies as arguments. Use the rest parameter to collect the hobbies and return an object with all the details.

// let person = (name, age, ...hubbies) => {
//     // console.log( name, age, hubbies);
//     return  {
//         name: name,
//         age: age,
//         hubbies: hubbies
//     }
    
// }
// console.log(person("Usman", 21, "Cricket", "Cooking", "Running"));

//? Spread Parameter


//* You have two arrays of numbers, array1 and array2.
//* Write code that combines them into a single array, removes duplicate values, and sorts them in ascending order using the spread operator.

let arry1 = [1, 3, 2, 5, 8, 10]
let arry2 = [2, 14, 6, 9, 11, 7]
let newArry = [...arry1, ...arry2]
let uniqArry = []
for(let num of newArry) {
    if(!uniqArry.includes((num))){
        uniqArry.push(num)
    }
}
// console.log(uniqArry.sort((arry1, arry2) => arry1 - arry2));




//*  Given an object with default settings for an application,
//* write a function that accepts a new settings object. Use the spread operator to return a single settings object, where new settings overwrite the defaults, but unspecified settings retain their default values.

let defaultObj = {
    name: "Muhammad Usman",
    age: 21,
    profession: "web developer",
    hubbies: ["Cricket", "Cooking", "Running"]
}

let newSettings = () => {
    let newSetting = {
        name: "S.Afridi",
        age: 20,
        profession: "web developer",
        hubbies: ["Watching Cricket", "Cooking"]
    }

    const mergedSetting = {...defaultObj, ...newSetting}
    return mergedSetting;
    
}

console.log(newSettings());
