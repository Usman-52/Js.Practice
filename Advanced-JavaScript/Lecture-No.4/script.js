"use strict"
//!================================== High Order Function ======================================//

//?==================================== Custom Filter ==========================================//

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

//?=========================================  Flexible Calculator ===========================================//
