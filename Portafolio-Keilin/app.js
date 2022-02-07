const menu = document.querySelector('#menu'),
iconoMenu = document.querySelector('#icono-menu');

iconoMenu.addEventListener('click', () => {
    menu.classList.toggle('menu--show');
})