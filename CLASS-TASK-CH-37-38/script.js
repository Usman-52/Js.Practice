//* P-NO.1


// function calculate(num) {
//     square = num * num;
//     return square;
// }

// console.log(calculate(7));


//* P-NO.2
// var globalVar = 20;
// function count() {
//    var count = 3 * 2;
//    return count;
// }

// console.log(globalVar); // 20 

// console.log(count()); // 20

// console.log(`Returned global Variable: ${globalVar} , Return Local variable ${count()} `)

//* P-NO-3

// var total = 50;

// function addToTotal(num) {
//      total = total + num; 
//     return total;
// }
// console.log(addToTotal(10));

//* P-NO.4

// function greetUser(name) {
//     return name;
// }

// console.log(`Hello ${greetUser("Alice")}`);


//* P-NO.5


// var status = "inactive";
// function activate (status) {
//     status = "Active";
//     return status;
// }

// // console.log(activate())

// console.log(`Global var value: ${status} & After changing: ${activate()}`)


//* P-No.6
// function addition(num1, num2, num3) {
//     sum = num1 + num2 + num3; //? 12 + 10 + 9 = 31
//     if (sum > 0) {  //?  so 31 is greater than 0 
//     return sum;  // ? so here the function will return the sum.
//    }
// }

// console.log(addition(12, 10, 9)) //? 31

 //* P-No.7
 
 //* Code a function call that has two arguments. The first argument is a variable. The second argument is another function call. 
 //* The second function call takes the argument 10. The value returned by the first function is assigned to est, which hasn't been declared beforehand.

// // Define the second function
// function secondFunction(x) {
//     return x * 2;
// }

// // Define the first function
// function firstFunction(y) {
//     return y + 5;
// }

// // Call firstFunction with the result of secondFunction(10)
// let est = firstFunction(secondFunction(10));

// // Log the result to the console
// console.log(est);

