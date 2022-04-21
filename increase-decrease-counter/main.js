const digit = document.getElementById("digit");
let i = 0;

function changeCounter(counter) {
    if (counter === 'Increase') {
        i++;
    } else if (counter === 'Decrease') {
        i--;
    } else if (counter === 'Reset') {
        i = 0;
    }
    digit.innerHTML = i;
}