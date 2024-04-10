const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');
const menuBtnIcon = menuBtn.querySelector('i');
const headerH1 = document.querySelector('.header__content h1');
const headerH2 = document.querySelector('.header__content h2');
/*=============== SHOW MENU ===============*/
menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('open');

  const isOpen = navLinks.classList.contains('open');
  menuBtnIcon.setAttribute('class', isOpen ? 'ri-close-line' : 'ri-menu-line');
});

/*=============== REMOVE MENU MOBILE ===============*/
navLinks.addEventListener('click', () => {
  navLinks.classList.remove('open');
  menuBtnIcon.setAttribute('class', 'ri-menu-line'); // wa illa menuBtnIcon.classList.add('ri-menu-line'); kif kif ça marche aussi
});
/*=============== scroll reveal logic (Header both h1 and h2 elements) ===============*/
const scrollRevealOption = {
  distance: '50px',
  origin: 'bottom',
  duration: 1000,
};

ScrollReveal().reveal(headerH1, {
  ...scrollRevealOption,
});

ScrollReveal().reveal(headerH2, {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal('.header__content p', {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal('.header__content .header__btn', {
  ...scrollRevealOption,
  delay: 1500,
});
/*=============== Card reveal with interval between each other ===============*/
ScrollReveal().reveal('.about__card', {
  duration: 1000,
  interval: 500,
});

ScrollReveal().reveal('.trainer__card', {
  ...scrollRevealOption,
  interval: 500,
});

/*=============== swiper and swiper bullets loGic implementation ===============*/
const swiper = new Swiper('.swiper', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== SCROLL REVEAL ANIMATION ===============*/
