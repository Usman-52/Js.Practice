//?  previous chapter issues in for loop:
//* 1). in chapter No. 18 example : when we searched peshawar and we find peshawar in index No. 2 then loop didn't break (stop).
//* until last iteration 

//* for Example we need to search my identity card number in Nadra Office (let say about 15 millions people are registered wid Nadra).
//* we find my card number on 99 Number then it'll very time consumable to iterate 15 millions time the loop.

//! what we should do to make more better for loop?

// ? we will add Flag , loopus Interruptus

//? what is Flag?
//* Flag is like a signal in programming is used to let program know that your certain condition has met. it usually storing boolean values 
//* 0s or 1s (true or false) , you can store any value in Flag variable but mostly using for boolean values.

//? what's loopus Interruptus?
//* means a break keyword which is used to break or executed the code anywhere when they met the condition.
//* it means whenever you find what you were searching about then the loop will stop executing more ..

// ? implementation

var studentsRecord = ["Muhammad Usman", "Sadia Afridi", "Mohib Ullah", "Kalsoom", "Muhammad Huzaifa", "Abdul Haseeb"];


// var meet = false; //* Flag variable 
// var searchStd = prompt("Enter Student Name:");

// for (var stdIndex = 0; stdIndex < studentsRecord.length; stdIndex++) {
//     if (searchStd === studentsRecord[stdIndex]) {
        
//         meet = true;
//         break;
//     }

// }

// if(meet) {
//     alert(`Yes, ${searchStd} is enrolled with us..`)
// }
// else{
//     alert(`No, ${searchStd} is Not enrolled with us..`)
// }

//? OR

// if (meet === true) {
//     alert(`Yes, ${searchStd} is enrolled with us..`)
// }
// else {
//     alert(`No, ${searchStd} is NOT enrolled with us..`)
// }

// ? OR

// if (meet === false) {
//     alert(`No, ${searchStd} is NOT enrolled with us..`)
// }
// else {
//     alert(`Yes, ${searchStd} is enrolled with us..`)
// }