const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');


const items = JSON.parse(localStorage.getItem('items')) || [];

const addItem = function (e) {
    e.preventDefault();
    const text = (this.querySelector("[name=item]")).value;
    const item = {
        text, // es6 shorthand for text: text, 
        done: false
    }

    items.push(item);
    populateList(items, itemsList);
    localStorage.setItem('items', JSON.stringify(items));
    this.reset();
}

const populateList = function (plates = [], platesList) {
    platesList.innerHTML = plates.map((plate, i) => {
        return `
            <li>
                <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''} />
                <label for="item${i}">${plate.text}</label>
                <input type="button" id="delete-item${i}" data-index=${i} />
                <label for="delete-item${i}"></label>
            </li> 
        `;
    }).join('');
}

const toggleDone = function (e) {

    if (!e.target.matches('input[type=checkbox]')) return;
    console.log(e.target);
    const el = e.target;
    const index = el.dataset.index;
    items[index].done = !items[index].done;
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList);
}

const deleteItem = function (e) {
    if (!e.target.matches('input[type=button]')) return;
    console.log(e.target);
    const el = e.target;
    const index = el.dataset.index;
    items.splice(index, 1);
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList);
}



addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);
itemsList.addEventListener('click', deleteItem);


populateList(items, itemsList);
