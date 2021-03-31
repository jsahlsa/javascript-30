const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');

const shadow = function (e) {
    //console.log(e);

    // es6 for:
    // const width = hero.offsetWidth;
    // const height = hero.offsetHeight; 
    const { offsetWidth: width, offsetHeight: height } = hero;
    let { offsetX: x, offsetY: y } = e;
    console.log(x, y);
}

hero.addEventListener('mousemove', shadow);