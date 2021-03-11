function playSound() {
    const audio = document.querySelector('audio');
    audio.currentTime = 0;
    audio.play();
    console.log(audio);
}

const btn = document.querySelector('button');

btn.addEventListener('click', playSound);