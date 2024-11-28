"use strict";


let startBtn = document.getElementById("Btn1")
let stopBtn = document.getElementById("Btn2")

let randomColors = () => {
    let hex = "0123456789ABCDEF"
    let color = "#"
    for(let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random() * 16)]
    }
    // console.log(color);
    return color;
}
console.log(randomColors());
let intervalId;
let colorStart = () => {
    
    let changeBackground = () => {
        document.body.style.backgroundColor = randomColors()
    }
    intervalId = setInterval(changeBackground, 2000)
}


let colorStop = () => {
    clearInterval(intervalId)
}


let startChangingColor = startBtn.addEventListener("click", colorStart)
let stopChangingColor = stopBtn.addEventListener("click", colorStop)
