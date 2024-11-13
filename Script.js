
const todoInput = document.getElementById('todo-input');
const addTodoButton = document.getElementById('add-todo');
const todoList = document.getElementById('todo-list');


addTodoButton.addEventListener('click', function() {
    const todoText = todoInput.value; 
    if (todoText) {
        createTodoItem(todoText); 
        todoInput.value = '  '; 
    }
});


function createTodoItem(text) {
    const li = document.createElement('li'); 
    const checkbox = document.createElement('input'); 
    checkbox.type = 'checkbox';

    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
            li.style.textDecoration = 'line-through'; 
            todoList.appendChild(li); 
        } else {
            li.style.textDecoration = 'none'; 
            todoList.insertBefore(li, todoList.firstChild); 
        }
    });

    const textNode = document.createTextNode(text);
    const deleteButton = document.createElement('button'); 
    deleteButton.textContent = 'Delete';

    deleteButton.addEventListener('click', function() {
        todoList.removeChild(li); 
    });

    li.appendChild(checkbox);
    li.appendChild(textNode); 
    li.appendChild(deleteButton);
    todoList.appendChild(li); 
}