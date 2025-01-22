"use strict";
const hello = "Greeting" 
const hi = " No Greeting"

//* to concatenate two string you can use two ways

// console.log(hello + hi); //* basic and old 
// console.log(`${hello}, ${hi}`);

let newStr =  String("Muhammad Usman")
console.log(typeof newStr);
console.log(newStr.charAt(4)); //* to Check the charactor on index 
console.log(newStr.indexOf("A")); //* to check that what is the index of A
let subStr = newStr.substring(0, 5) //* 0 = start and 5 is end-1 (4 char will print)
console.log(subStr); 

let subStr2 = newStr.slice(6, 12) //* .slice will split the string and save in new subStr2 
console.log(subStr2);

let reverse = newStr.slice(-12, 5)
console.log(reverse);

// let str = "  Hello World  "
// console.log(str);
// console.log(str.trim()); //* to remove white spaces from the string both on start and end

let userEmail = "dove663@gmail.com"

// console.log(userEmail.includes("@"));
// console.log(userEmail.replace("dove", "warkhsamara"));