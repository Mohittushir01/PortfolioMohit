const mobile_nav = document.querySelector('.menu-icons');
const nav_header = document.querySelector('nav');

const toggleNavbar = () => {
    nav_header.classList.toggle("active");
}

mobile_nav.addEventListener('click', () => toggleNavbar());