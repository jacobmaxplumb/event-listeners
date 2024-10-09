const input = document.getElementById('taskInput');
const ul = document.getElementById('taskList');
const button = document.getElementById('addTaskButton');

button.addEventListener('click', addTask);

function addTask() {
    const li = document.createElement('li');
    li.textContent = input.value;
    ul.appendChild(li);
    input.value = '';
}