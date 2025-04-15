const deadDisplay = document.getElementById("dead");
const lostDisplay = document.getElementById("lost");
const holes = document.querySelectorAll('.hole');

let counterDead = 0;
let counterLost = 0;

function getHole(index) {
    return document.getElementById(`hole${index}`);
}

function killMole(event) {
    const clickedHole = event.target; 
    if (clickedHole.classList.contains('hole_has-mole')) {
        deadDisplay.textContent = ++counterDead;
    } else {
        lostDisplay.textContent = ++counterLost;
    }

    if (counterDead === 10 ) {
        endGame("Победа!");
    } else if (counterLost === 5) {
        endGame("Игра окончена. Вы проиграли");
    }
}

function endGame(massage) {
        alert(massage);
        counterDead = 0;
        counterLost = 0;
        deadDisplay.textContent = counterDead;
        lostDisplay.textContent = counterLost;
}

holes.forEach((hole) => {
    hole.addEventListener('click', killMole);
});
