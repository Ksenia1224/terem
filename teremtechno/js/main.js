const menuBtn = document.querySelector('.menu-btn');
const header = document.querySelector('.header-inner-right');
const body = document.body;

menuBtn.addEventListener('click', function () {
    header.classList.toggle('header-inner-right--active');
    body.classList.toggle('body--active');
    menuBtn.classList.toggle('menu-btn--active');
});