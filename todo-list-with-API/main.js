function clearFields() {
    document.querySelector("#name").value = '';
    document.querySelector("#date").value = '';
    document.querySelector("#time").value = '';
}

function checkItems(element) {
    if (element.checked) {
        element.parentElement.parentElement.style.textDecoration = 'line-through';
        element.parentElement.parentElement.style.opacity = 0.5;
    } else {
        element.parentElement.parentElement.style.textDecoration = 'none';
        element.parentElement.parentElement.style.opacity = 1;

    }


}
let table = document.querySelector('table')
let nameInput = document.querySelector('#name');
let timeInput = document.querySelector('#time');

function addTodo() {
    let name = nameInput.value;
    let time = new Date(timeInput.value);
    const formatedDate = time.toLocaleDateString("en-GB", { // you can use undefined as first argument
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    })
    const formatedTime = time.toLocaleString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
    })
    let template = `<tr>
    <th scope="row">
        <input type="checkbox" name="checkbox" id="checkbox" onclick="checkItems(this)">
    </th>
    <td>${name}</td>
    <td >${formatedDate}</td>
    <td>${formatedTime}</td>

    <td>
        <i class="bi bi-pencil-square"></i>
        <i class="bi bi-trash" data-bs-toggle="modal" data-bs-target="#DeleteConfirmationModal"></i>
    </td>
</tr>`;

    table.innerHTML += template;
}