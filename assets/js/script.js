const navbarToggleBtn = document.querySelector('.navbar-toggle-btn');
const navbarNav = document.querySelector('.navbar-nav');

navbarToggleBtn.addEventListener('click', (e) => {
    e.target.classList.toggle('active');
    navbarNav.classList.toggle('active');
});
