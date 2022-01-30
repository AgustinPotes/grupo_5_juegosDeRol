const hamburger = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('is-active')
    mobile_menu.classList.toggle('is-active')
});

const userLoggedNewBcg = document.querySelector('.desktop-nav');

userLoggedNewBcg.style.backgroundColor = rgba(149, 147, 255);