"use strict"
//!========================================== High Order Function =========================================//

//?========================================== Custom Filter ==============================================//

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let num of arr) {

}
let newArr = []

let filterArr = (arr) => {
    return () => {
        for(let num of arr){
            if(num % 2 === 0){
                
                newArr.push(num)
                
            }
        }
        return newArr
    }

}
let even = filterArr(arr)
even()
console.log(newArr);

//?=========================================  Flexible Calculator ========================================//

let add = (num1, num2) => num1 + num2;
let sub = (num1, num2) => num1 - num2;
let multi = (num1, num2) => num1 * num2;
let divide = (num1, num2) => num1 / num2;

let calculator = (n1, n2, operations) => {
    return operations(n1, n2)
}

// let result = calculator(8, 4 , sub)
// console.log(result)

console.log(calculator(15, 2, multi))


//?==========================================  String Transformer ========================================//

let transformString = (yourString, clb) => {
    return clb(yourString)
}

let str = (passStr) => passStr.toUpperCase();

console.log(transformString("Hello", str));

//?==========================================  Array Transformation ========================================//

let array = [2,4, 6, 8, 10, 12, 14, 16, 18, 20]
let arrayTransform = (arr, clb) => {
    return clb(arr)
}

let callBack = (array) => {
    return array.map( (num) => num * num)
}

console.log(arrayTransform(array, callBack));