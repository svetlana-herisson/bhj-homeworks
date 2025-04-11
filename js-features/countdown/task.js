
let timeToCountdown = 59;
let timerDisplay = document.getElementById("timer");
const filePath = "https://img.freepik.com/free-photo/lone-tree_181624-46361.jpg?t=st=1744375142~exp=1744378742~hmac=c972a197156eec43541c96d727c181e096ea79e2401af0caa1a1a3c41f02e063&w=996"

function countdownSeconds(timeInSeconds) {
    let timeLeft = timeInSeconds;

    let counter = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(counter);
            alert("«Вы победили в конкурсе!»")
            window.location.href = filePath;
        } else {
            const hours = Math.floor(timeLeft / 3600);
            const minutes = Math.floor((timeLeft % 3600) / 60)
            const seconds = Math.floor(timeLeft % 60)

            const formattedTime = `${String(hours).padStart(2,"0")}:${String(minutes).padStart(2,"0")}:${String(seconds).padStart(2,"0")}`;

            timerDisplay.textContent = formattedTime;
            timeLeft--;
        }
    }, 1000);
}

countdownSeconds(timeToCountdown);
