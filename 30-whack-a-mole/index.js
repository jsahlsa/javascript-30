const holes = document.querySelectorAll(".hole");
const scoreBoard = document.querySelector(".score");
const moles = document.querySelectorAll(".mole");
let lastHole;
let timeUp = false;
let score = 0;

function randomTime(max, min) {
    return Math.round(Math.random() * (max - min) + min);
}

function randomHoles(holes) {
    const idx = Math.floor(Math.random() * holes.length);
    const hole = holes[idx];
    if (lastHole === hole) {
        return randomHoles(holes);
    }
    console.log(hole);
    lastHole = hole;
    return hole;
}

function peep() {
    const time = randomTime(1000, 200);
    const hole = randomHoles(holes);
    console.log({ time, hole });
    hole.classList.add('up');
    setTimeout(() => {
        hole.classList.remove('up');
        if (!timeUp) peep();
    }, time);
}

function startGame() {
    timeUp = false;
    score = 0;
    scoreBoard.textContent = 0;
    peep();
    setTimeout(() => timeUp = true, 10000);
}

function bonk(e) {
    console.log(e);
    if (!e.isTrusted) return;
    score++;
    this.classList.remove('up');
    scoreBoard.textContent = score;
}

moles.forEach(mole => mole.addEventListener('click', bonk));