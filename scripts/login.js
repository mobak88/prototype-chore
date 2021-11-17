'use strict';

const loginForm = document.querySelector('.login-form');
const loginSelect = document.getElementById('rolle');
const loginBtn = document.getElementById('login-btn');

const chooseRole = () => {
    if (loginSelect.value === 'Forelder') {
        console.log('Forelder');
        loginForm.action = '/overview.html';
    }
    if (loginSelect.value === 'Barn') {
        console.log('Barn');
        loginForm.action = '/overview.html';
    }
};

loginForm.addEventListener('submit', (e) => {
    if (loginSelect.value === 'Velg rolle') {
        e.preventDefault();
    }
    chooseRole();
});
