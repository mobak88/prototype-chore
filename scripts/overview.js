const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        menu.classList.remove('menu-display');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menu.classList.add('menu-display');
        menuOpen = false;
    }
});
