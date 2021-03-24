const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];
const p = document.querySelector('p');
let onOff = true;

function makeGreen() {
    if (onOff) {
        p.style.color = '#BADA55';
        p.style.fontSize = '50px';
    } else {
        p.style.color = 'black';
        p.style.fontSize = '16px'
    }
    onOff = !onOff;
}

p.addEventListener('click', makeGreen);

// Regular
console.log('Hello');

// Interpolated
console.log('Hello, I am %s', '💩!');

// Styled
console.log('%c Styled text!', 'font-size: 50px; color: rebeccapurple; background: white');

// warning!
console.warn('Oh Crap!');

// Error :|
console.error('Shit!');

// Info
console.info('Scotland has 421 words for “snow”');

// Testing
console.assert(1 === 2, 'That is incorrect');

// clearing
// console.clear();

// Viewing DOM Elements
console.log(p);
console.dir(p);

console.clear();

// Grouping together
dogs.forEach(dog => {
    console.groupCollapsed(dog.name);
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old.`);
    console.log(`${dog.name} is ${dog.age * 7} in dog years.`);
    console.groupEnd(dog.name);
}
);

// counting
console.count(p);
console.count(p);
console.count(p);
console.count(p);

// timing
console.time('fetching data');

fetch('https://raw.githubusercontent.com/samayo/country-json/master/src/country-by-population.json')
    .then(data => data.json())
    .then(data => {
        console.timeEnd('fetching data');
        console.log(data);
    });