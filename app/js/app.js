const header = document.querySelector('.page-header');
const headerToggle = document.querySelector('.page-header__button-toggle');
const headerMenu = document.querySelector('.page-header__menu');

if (header.classList.contains('no--js')) {
    header.classList.remove('no--js');
}

headerToggle.addEventListener('click', function () {
    if (headerMenu.classList.contains('page-header__menu--open')) {
        headerMenu.classList.remove('page-header__menu--open');
        headerToggle.classList.remove('page-header__button-toggle--menu-open');
    } else {
        headerMenu.classList.add('page-header__menu--open');
        headerToggle.classList.add('page-header__button-toggle--menu-open');
    }
})