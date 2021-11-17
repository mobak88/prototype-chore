'use strict';

const loginForm = document.querySelector('.login-form');
const loginSelect = document.getElementById('rolle');
const loginBtn = document.querySelector('.login-btn');

const chooseRole = () => {
    if ((loginSelect.selectedIndex === '0')) {
        console.log('Forelder');
    }
    if ((loginSelect.selectedIndex === '1')) {
        console.log('Barn');
    }
};

loginBtn.addEventListener("submit", (e) => {
    e.preventDefault();
    chooseRole();
});
