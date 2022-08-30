const taskInput = document.querySelector('#task-input');
const taskBox = document.querySelector('.task-box');

taskInput.addEventListener('keypress', (e) => {
    if (e.keyCode === 13) {
        let data = taskInput.value;
        taskBox.append(data);
    }
})

function createTask(className, text) {
    let div = document.createElement('div');
    let input = document.createElement('input');
    let label = document.createElement('label');

    div.classList.add('task');
    taskBox.append(div);
}

createTask();