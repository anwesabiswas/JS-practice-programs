const todoText = document.querySelector('.todo-text');
const todoButton = document.querySelector('.todo-btn');
const todoList = document.querySelector('.todo-list');
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
//define addTodo
function addTodo(event) {
    //creat a div with class todo
    const todoDiv = document.createElement('li');
    todoDiv.classList.add('todo');
    //creat a li with class todo-items
    const newTodo = document.createElement('div');
    newTodo.innerText = todoText.value;
    newTodo.classList.add('todo-items');
    todoDiv.appendChild(newTodo);
    //creat a checked button with class complete-btn
    const completeButton = document.createElement('button');
    completeButton.innerHTML = '<i class="bi bi-check-all"></i>';
    completeButton.classList.add('complete-btn');
    todoDiv.appendChild(completeButton);
    //creat a delete button with class trash-btn
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="bi bi-trash"></i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);
    //append complete div on todolist
    todoList.appendChild(todoDiv);
    //clear todotext value
    todoText.value = "";
}

function deleteCheck(e) {
    const item = e.target;
    if (item.classList[0] === 'trash-btn') {
        const todo = item.parentElement;
        todo.remove();
    }

    if (item.classList[0] === 'complete-btn') {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}