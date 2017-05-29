(function () {

    const addItems = document.querySelector('.add-items');
    const itemsList = document.querySelector('.plates');
    const checkAllBtn = document.querySelector('.checkAll');
    const UncheckAllBtn = document.querySelector('.UncheckAll');

    const items = JSON.parse(localStorage.getItem('items')) || [];

    function addItem(e) {
        e.preventDefault();
        const text = (this.querySelector('[name=item]')).value;
        const item = {
            text: text,
            done: false
        }
        items.push(item);
        populateList(items, itemsList);
        localStorage.setItem('items', JSON.stringify(items));
        this.reset();
    }

    function populateList(plates = [], plateList) {
        plateList.innerHTML = plates.map((plate, i) => {
            return `
               <li>
               <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''}/>
                 <label for="item${i}">${plate.text}</label>
               </li>
            `;
        }).join('');
    }


    function toggleDone(e) {
        if (!e.target.matches('input')) return;
        const el = e.target;
        const index = el.dataset.index;
        items[index].done = !items[index].done;
        localStorage.setItem('items', JSON.stringify(items));
        populateList(items, itemsList);

    }

    function checkAll() {
        items.forEach(item => {
            if (item.done) return;
            item.done = true;
        });
        localStorage.setItem('items', JSON.stringify(items));
        populateList(items, itemsList);
    }

    function UncheckAll() {
        items.forEach(item => {
            if (!item.done) return;
            item.done = false;
        });

        localStorage.setItem('items', JSON.stringify(items));
        populateList(items, itemsList);
    }


    addItems.addEventListener('submit', addItem);
    itemsList.addEventListener('click', toggleDone);
    checkAllBtn.addEventListener('click', checkAll);
    UncheckAllBtn.addEventListener('click', UncheckAll);

    populateList(items, itemsList);

})()