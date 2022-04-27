const login = document.querySelector('.login-btn');
const popup = document.querySelector('.pop-up');
const close = document.querySelector('.modal-close');
login.addEventListener('click', function () {
    popup.style.visibility = 'visible';
    popup.style.opacity = '100%';
});
close.addEventListener('click', function () {
    popup.style.visibility = 'hidden';
    popup.style.opacity = '0';
});