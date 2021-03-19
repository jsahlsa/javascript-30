const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

const now = new Date();
const seconds = now.getSeconds();
const mins = now.getMinutes();
const hours = now.getHours();

let secondsDegrees = ((seconds / 60) * 360) + 90;
let minDegrees = ((mins / 60) * 360) + 90;
let hourDegrees = ((hours / 12) * 360) + 90;








function setDate() {
    secondsDegrees += 6;
    minDegrees += 0.1;
    hourDegrees += 0.0083

    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    console.log(mins);
    minuteHand.style.transform = `rotate(${minDegrees}deg)`;

    console.log(hours);
    hourHand.style.cssText = `transform: rotate(${hourDegrees}deg);`;





}

setInterval(setDate, 1000);