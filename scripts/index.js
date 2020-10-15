const burger = document.querySelector('.header__burger');

const menuHeader = document.querySelector('.header__menu');

const body = document.querySelector('.page');
function classActiveAdd() {
    burger.classList.toggle('active');
    menuHeader.classList.toggle('active');
    body.classList.toggle('lock');
}

burger.addEventListener('click', classActiveAdd);