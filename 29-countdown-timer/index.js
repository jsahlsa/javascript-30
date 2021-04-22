let countdown;
const displayTime = document.querySelector('.display__time-left');
const timers = document.querySelectorAll('.timer__button');

const endTime = document.querySelector('.display__end-time');

function timer(seconds) {
    clearInterval(countdown);
    const now = Date.now();
    const then = now + seconds * 1000;
    displayTimeLeft(seconds);
    displayEndTime(then);

    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        // check if we should stop it
        if (secondsLeft < 0) {
            clearInterval(countdown);
            return;
        }
        displayTimeLeft(secondsLeft);
    }, 1000);
}

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
    displayTime.textContent = display;
    document.title = display;
    // console.log({ minutes, remainderSeconds });
}

function displayEndTime(timestamp) {
    const end = new Date(timestamp);
    const hour = end.getHours();
    const minute = end.getMinutes();
    endTime.textContent = `Be back by ${hour > 12 ? hour - 12 : hour}:${minute < 10 ? '0' : ''}${minute}`;
    console.log(end);
}

timers.forEach(timers => timers.addEventListener('click', function () {


    timer(this.dataset.time);
    console.log(typeof this.dataset.time);
}));

document.customForm.addEventListener('submit', function (e) {

    e.preventDefault();
    let value = this.minutes.value * 60;
    timer(value);
    console.log(typeof value);
    this.reset();
})




