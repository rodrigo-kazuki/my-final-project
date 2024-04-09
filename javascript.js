const navEl = document.querySelector('.navbar');
const navItem = document.querySelector('nav-link');
window.addEventListener('scroll', () => {
    if (window.scrollY >= 10) { // Verifica o deslocamento vertical da página
        navEl.classList.add('navbar-scrolled1');
    } else {
        navEl.classList.remove('navbar-scrolled1'); // Remova a classe se o deslocamento for menor que 2
    }
    if (window.scrollY >= 64) { // Verifica o deslocamento vertical da página
        navEl.classList.add('navbar-scrolled2');
    } else {
        navEl.classList.remove('navbar-scrolled2'); // Remova a classe se o deslocamento for menor que 2
    }
});
