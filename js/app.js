const taskInput = document.querySelector('.task-input');
const pushBtn = document.querySelector('.push-btn');
const deleteBtn = document.querySelector('.delete-btn');
const taskBox = document.querySelector('.task-box');
const container = document.querySelector('.container');

const sidebar = document.createElement('div');
const catBtn = document.createElement('button');
const catInput = document.createElement('input');
const newCat = document.createElement('div');
const categories = document.createElement('div');
const sidebarAllBtn = document.createElement('button');
const line = document.createElement('span');

let taskNum = 1;

pushBtn.addEventListener('click', (event) => {
    let data = taskInput.value;
    if (!data) return;

    createTask(data, taskNum);
    taskNum++;
    taskInput.value = '';
});

taskBox.addEventListener('click', (event) => {
    let btn = event.target;

    if (btn.classList.contains('delete-btn')) {
        btn.parentNode.remove();
    }
});

catBtn.addEventListener('click', () => {
    let catName = catInput.value;

    if (!catName) return;
    if (categories.children.length === 10) {
        alert('Максимальное количество категорий: 10');
        catInput.value = '';
        return;
    };

    createCategory(catName);
    catInput.value = '';
});

categories.addEventListener('click', event => {
    if (event.target.classList.contains('sidebar-btn')) {
        event.target.classList.toggle('active');
    }
});

function createTask(text, num) {
    taskBox.insertAdjacentHTML('afterbegin', `
    <div class="task">
        <div class="checkbox">
            <input class="checkbox-input" type="checkbox" id="checkbox${num}">
            <label class="checkbox-label" for="checkbox${num}">${text}</label>
        </div>
        <select class="mark">
            <option value="1">Uncategorized</option>
        </select>
        <button class="material-icons delete-btn">delete</button>
    </div>
    `);
};

function createCategory(btnName) {
    let newSideBtn = document.createElement('button');
    newSideBtn.classList.add('sidebar-btn');
    newSideBtn.innerHTML = btnName;

    categories.append(newSideBtn);
}

function createSidebar() {
    sidebar.classList.add('sidebar');
    container.prepend(sidebar);

    categories.classList.add('categories');
    sidebar.prepend(categories);

    newCat.classList.add('new-cat');
    categories.after(newCat);

    catInput.classList.add('cat-input');
    catInput.placeholder = 'New category';
    catInput.type = 'text';
    newCat.prepend(catInput);

    catBtn.classList.add('cat-btn');
    catBtn.innerHTML = 'Add';
    newCat.append(catBtn);

    sidebarAllBtn.classList.add('sidebar-btn', 'active');
    sidebarAllBtn.innerHTML = 'All';
    categories.prepend(sidebarAllBtn);

    line.classList.add('line');
    sidebar.after(line);
}

createSidebar();