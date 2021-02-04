const btnHamburger = document.querySelector('#btnHamburger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const fadesItems = document.querySelectorAll('.has-fade');
const headMenu = document.querySelector('.header__menu');

// Display on/off mobile Menu.
const mobileMenu = () => {
  if (header.classList.contains('open')) {
    body.classList.remove('no-scroll');
    header.classList.remove('open');
    headMenu.classList.toggle('has-fade');
  } else {
    body.classList.add('no-scroll');
    header.classList.add('open');
    headMenu.classList.toggle('has-fade');
  }
};
btnHamburger.addEventListener('click', mobileMenu);

// Close mobile menu when browser hit 1023px
const closeHamMenu = () => {
  if (window.innerWidth >= 1023) {
    document.querySelector('.header__menu').style.display = 'none';
  } else {
    document.querySelector('.header__menu').style.display = 'block';
  }
};

window.addEventListener('load', closeHamMenu);
window.addEventListener('resize', closeHamMenu);
