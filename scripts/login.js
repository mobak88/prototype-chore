const loginForm = document.getElementsByClassName('login-form');
const loginSelect = document.getElementById('rolle');

const chooseRole = () => {
    if ((loginSelect.selectedIndex === '0')) {
        console.log('Forelder');
    }
    if ((loginSelect.selectedIndex === '1')) {
        console.log('Barn');
    }
};

const h1 = document.getElementsByClassName('login-text');

h1.addEventListener('click', (e) => {
    console.log('test');
});

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    chooseRole();
});
