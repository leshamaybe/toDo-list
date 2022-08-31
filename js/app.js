const taskInput = document.querySelector('.task-input');
const pushBtn = document.querySelector('.push-btn');
const deleteBtn = document.querySelector('.delete-btn');
const taskBox = document.querySelector('.task-box');
const catBtn = document.querySelector('.cat-btn');
const catInput = document.querySelector('.cat-input');
const categories = document.querySelector('.categories');
const sidebarBtn = document.querySelector('.sidebar-btn');


let tasks = taskBox.children;
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

function createTask(text, num) {
    taskBox.insertAdjacentHTML('afterbegin', `
    <div class="task">
        <div class="checkbox">
            <input class="checkbox-input" type="checkbox" id="checkbox${num}">
            <label class="checkbox-label" for="checkbox${num}">${text}</label>
        </div>
        <div class="mark">Uncategorized</div>
        <button class="material-icons delete-btn">delete</button>
    </div>
    `);
};

function createCategory(btnName) {
    let sideBtn = document.createElement('button');
    sideBtn.classList.add('sidebar-btn');
    sideBtn.innerHTML = btnName;

    categories.append(sideBtn);
}