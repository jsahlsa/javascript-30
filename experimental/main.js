function playSound() {
    const audio = document.querySelector('audio');
    audio.currentTime = 0;
    audio.play();
    console.log(audio);
}

const btn = document.querySelector('button');
const unicornBtn = document.querySelector('.unicorns');

btn.addEventListener('click', playSound);
unicornBtn.addEventListener('click', () => {
    cornify_add();
});