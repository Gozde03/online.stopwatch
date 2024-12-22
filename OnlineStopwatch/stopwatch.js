let isRunning= false;
let interval = null;

let seconds = 0;
let minutes = 0;
let hours = 0;

//const timeDisplay = document.getElementsById('display');
const timeDisplay = document.getElementById("display");


function updateTime() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes === 60) {
        minutes = 0;
        hours++;
    } 

    const formattedTime = 
    `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
timeDisplay.textContent = formattedTime;
}

document.getElementById("startBtn").addEventListener("click", () => {
    if (!isRunning){
        isRunning = true;
        interval = setInterval(updateTime, 1000);
    }
});

document.getElementById("stopBtn").addEventListener("click", () => {
    isRunning = false;
    clearInterval(interval);
});

document.getElementById("resetBtn").addEventListener("click", () => {
    isRunning = false;
    clearInterval(interval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    timeDisplay.textContent = "00:00:00";
});


const startBtn = document.getElementById('startBtn')
startBtn.addEventListener('click', ()=>{
    console.log('Timer started')
})
const stopBtn = document.getElementById('stopBtn')
stopBtn.addEventListener('click',()=>{
console.log('Timer stopped')
})
const resetBtn= document.getElementById('resetBtn')
resetBtn.addEventListener('click', ()=>{
    console.log('Timer resetted')
})
document.body.style.backgroundColor = "black";



