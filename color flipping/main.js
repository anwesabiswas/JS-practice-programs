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

function changeColor(color) {
    if (color === 'Red') {
        document.body.style.backgroundColor = 'red';
    } else if (color === 'Blue') {
        document.body.style.backgroundColor = 'blue';
    } else if (color === 'Yellow') {
        document.body.style.backgroundColor = 'yellow';
    } else {
        document.body.style.backgroundColor = 'green';
    }
}

function anyNumber() {
    return Math.floor(Math.random() * hex.length);
}