const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

const ul = document.querySelector('#bands');



const sortedBands = bands.sort((a, b) => strip(a) > strip(b) ? 1 : -1);

console.log(sortedBands);




ul.innerHTML = bands
    .map((band, i) => {
        return `
        <li id="${i}">${band}</li>
        `;
    })
    .join('');

function strip(bandName) {
    return bandName.replace(/^(a |the |an )/i, '');
}

