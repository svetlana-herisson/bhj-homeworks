let count = 0;
const button = document.getElementById("cookie");
const conter = document.getElementById("clicker__counter");
const speedDisplay = document.createElement("div");

let lastClickTime = new Date().getTime();
let currentWidth = 200;
let startTime = 0;

button.addEventListener("click", () => {
    count++
    conter.textContent = count;
    
    const currentTime = new Date().getTime();
    const timeDifference = (currentTime - lastClickTime) / 1000; 

    let clicksPerSecond = 0;
    if (timeDifference > 0) {
        clicksPerSecond = 1 / timeDifference;
    }

    speedDisplay.textContent = `Скорость клика: ${clicksPerSecond.toFixed(2)} кликов/сек`;

    lastClickTime = currentTime;
    
    currentWidth = (currentWidth === 200) ? 220 : 200;
    button.width = currentWidth;

    conter.appendChild(speedDisplay); 
});

