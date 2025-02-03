const boton = document.getElementById('boton');
const caja = document.getElementById('caja');

boton.addEventListener('click', () => {
  caja.style.left = '200px';
});


const submenu = document.querySelectorAll('.submenu');

submenu.forEach(menu => {
  menu.addEventListener('transitionend', () => {
    menu.style.transition = 'none';
  });
});