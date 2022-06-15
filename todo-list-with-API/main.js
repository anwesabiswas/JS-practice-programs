function clearFields() {
    document.querySelector("#name").value = '';
    document.querySelector("#date").value = '';
    document.querySelector("#time").value = '';
}

function checkItems(element) {
    if(element.checked) {
        element.parentElement.parentElement.style.textDecoration = 'line-through';
        element.parentElement.parentElement.style.opacity= 0.5;
    } else { 
        element.parentElement.parentElement.style.textDecoration = 'none';
        element.parentElement.parentElement.style.opacity= 1;

    }
    
    
}
let table = document.querySelector('table')
let nameInput = document.querySelector('#name');
let dateInput = document.querySelector('#date');
let timeInput = document.querySelector('#time');
function addTodo(){
    let name = nameInput.value;
    let date = dateInput.value;
    let time = timeInput.value;
    
    let template = `<tr>
    <th scope="row">
        <input type="checkbox" name="checkbox" id="checkbox" onclick="checkItems(this)">
    </th>
    <td>${name}</td>
    <td >${date}</td>
    <td>${time}</td>

    <td>
        <i class="bi bi-pencil-square"></i>
        <i class="bi bi-trash" data-bs-toggle="modal" data-bs-target="#DeleteConfirmationModal"></i>
    </td>
</tr>`;

    table.innerHTML += template;
}
