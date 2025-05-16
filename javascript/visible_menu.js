let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop && currentScroll > 50) {
        // Scroll dolů – schovej navbar
        navbar.classList.add('navbar-hidden');
    } else {
        // Scroll nahoru – ukaž navbar
        navbar.classList.remove('navbar-hidden');
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});