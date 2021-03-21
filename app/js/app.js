const header = document.querySelector('.page-header');
const headerToggle = document.querySelector('.header__toggle');
const headerMenu = document.querySelector('.header__menu');
const menuList = document.querySelector('.header__menu-list');

const menuOpen = function () {
    if (headerMenu.classList.contains('header__menu--open')) {
        headerMenu.classList.remove('header__menu--open');
        document.body.classList.remove('no-scroll');
        console.log(11);
    } else {
        headerMenu.classList.add('header__menu--open');
        document.body.classList.add('no-scroll');
        console.log(22)
    }
}

headerToggle.addEventListener('click',function () {
    if (headerMenu.classList.contains('header__menu--open')) {
        headerMenu.classList.remove('header__menu--open');
        document.body.classList.remove('no-scroll');
    } else {
        headerMenu.classList.add('header__menu--open');
        document.body.classList.add('no-scroll');
    }
});
menuList.addEventListener('click', function () {
    if (headerMenu.classList.contains('header__menu--open')) {
        headerMenu.classList.remove('header__menu--open');
        document.body.classList.remove('no-scroll');
    } else {
        headerMenu.classList.add('header__menu--open');
        document.body.classList.add('no-scroll');
    }
});
