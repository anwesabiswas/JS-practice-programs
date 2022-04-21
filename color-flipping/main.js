const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const btn = document.getElementById("btn_random");
const color = document.querySelector(".color");
btn.addEventListener("click", function () {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {

        hexColor = hexColor + hex[anyNumber()];
    };

    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;

})

function changeColor(selectedColor) {
    if (selectedColor === 'Red') {
        color.textContent='red';
        document.body.style.backgroundColor = 'red';
    } else if (selectedColor === 'Blue') {
        color.textContent='blue';
        document.body.style.backgroundColor = 'blue';
    } else if (selectedColor === 'Yellow') {
        color.textContent='yellow';
        document.body.style.backgroundColor = 'yellow';
    } else {
        color.textContent='green';
        document.body.style.backgroundColor = 'green';
    }
}

function anyNumber() {
    return Math.floor(Math.random() * hex.length);
}