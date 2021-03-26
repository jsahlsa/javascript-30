// get elements

const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const fullscreen = player.querySelector('.fullscreen');
const rate = player.querySelector('.rate');
const volume = player.querySelector('.volume');

const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const rangesArray = [...player.querySelectorAll('.player__slider')];
console.log(rangesArray);




// build functions
function togglePlay() {
    const method = video.paused ? 'play' : 'pause';
    video[method]();
}

function updateButton() {
    const icon = this.paused ? '▶' : '❚❚';
    toggle.textContent = icon;
    //console.log('update button');
}

function skip() {
    console.log(this.dataset.skip);
    video.currentTime += parseFloat(this.dataset.skip);
    console.log(video.currentTime);
}

function handleRangeUpdate() {
    video[this.name] = this.value;
    rate.textContent = `${rangesArray[1].value}x`;
    volume.textContent = rangesArray[0].value;
    console.log(this.value);
}

function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    //console.log(percent);
    progressBar.style.flexBasis = `${percent}%`
}

function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
    console.log(scrubTime);
}

function makeFullscreen(e) {
    video.requestFullscreen();
    console.log(e);
}

// hook up listeners
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);

toggle.addEventListener('click', togglePlay);

skipButtons.forEach(skipButton => skipButton.addEventListener('click', skip));

ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));

let mouseDown = false;
video.addEventListener('timeupdate', handleProgress);
progress.addEventListener('click', scrub);
// Same as if (mousedown) { scrub(); }
progress.addEventListener('mousemove', (e) => mouseDown && scrub(e));
progress.addEventListener('mousedown', () => mouseDown = true);
progress.addEventListener('mouseup', () => mouseDown = false);
fullscreen.addEventListener('click', makeFullscreen);
