const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');

const walk = 30;


const shadow = function (e) {
    //console.log(e);

    // es6 for:
    // const width = hero.offsetWidth;
    // const height = hero.offsetHeight; 
    const { offsetWidth: width, offsetHeight: height } = hero;
    let { offsetX: x, offsetY: y } = e;

    if (this !== e.target) {
        x += e.target.offsetLeft;
        y += e.target.offsetTop;
    };

    const xWalk = (x / width * walk) - (walk / 2);
    const yWalk = (y / height * walk) - (walk / 2);
    text.style.textShadow = `${xWalk}px ${yWalk}px 10px rgba(0,0,0,0.17)`;
    console.log(xWalk, yWalk);
}

hero.addEventListener('mousemove', shadow);