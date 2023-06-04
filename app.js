const menuToggle = document.querySelector('.menuToggle');
const body = document.querySelector('body');

menuToggle.addEventListener('click', () => {
    body.classList.toggle('active');
})