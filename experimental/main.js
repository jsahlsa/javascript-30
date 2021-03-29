

const btnTwo = document.querySelector('.btnTwo');
const btn = document.querySelector('.clap');
const unicornBtn = document.querySelector('.unicorns');
const hashPara = document.querySelector('.hash__para');

function playSound() {
    const audio = document.querySelector('audio');
    audio.currentTime = 0;
    audio.play();
    console.log(audio);
}

function hashRow() {
    let hash = '#';
    //console.log(e);
    for (let i = 0; i < 7; i++) {
        console.log(hash);
        hashPara.innerHTML += hash + '\n';
        hash = hash + '#';

    }
    //console.log(allHashes);
}

btnTwo.addEventListener('click', hashRow);
btn.addEventListener('click', playSound);
unicornBtn.addEventListener('click', () => {
    cornify_add();
});

let fizz = 'fizz';
let buzz = 'buzz';

for (let i = 0; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0 && i !== 0) {
        console.log(fizz + buzz);
        continue;
    } else if (i % 3 === 0 && i !== 0) {
        console.log(fizz);
    } else if (i % 5 === 0 && i !== 0) {
        console.log(buzz);
    } else {
        console.log(i);
    }
}

let count = 0;
let black = '#';
let white = ' ';
let num = 20;
let lineOne = white + black;
let lineTwo = black + white;
console.log(lineOne.repeat(num / 2));

for (let i = 0; i < num / 2; i++) {

    console.log(lineOne.repeat(num / 2) + '\n');
    console.log(lineTwo.repeat(num / 2) + '\n');

}





