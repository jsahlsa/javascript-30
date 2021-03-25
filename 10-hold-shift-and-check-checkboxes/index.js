const boxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function checkBoxes(e) {
    let inBetween = false;
    console.log(this);
    if (e.shiftKey && this.checked) {
        boxes.forEach(box => {
            //console.log(box);
            if (box === this || box === lastChecked) {
                inBetween = !inBetween;
            }

            if (inBetween) {
                box.checked = true;
            }
        })
    }

    lastChecked = this;
}

boxes.forEach(box => box.addEventListener('click', checkBoxes));