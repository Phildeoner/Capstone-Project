const menuBtn = document.querySelector('.menu-btn');
const reaction = document.querySelector('.menu-btn_options');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.menu-nav__item');
let showMenu = false;

let item = document.createElement("div");
let column = document.createElement("div"); 
let row = document.createElement("div");


function toggleMenu() {
  if (!showMenu) {
    reaction.classList.add('open');
    nav.classList.add('open');
    menuNav.classList.add('open');
    navItems.forEach((item) => item.classList.add('open'));

    showMenu = true;
  } else {
    reaction.classList.remove('open');
    nav.classList.remove('open');
    menuNav.classList.remove('open');
    navItems.forEach((item) => item.classList.remove('open'));

    showMenu = false;
  }
}

menuBtn.addEventListener('click', toggleMenu);



// resource persons section

let columns = 2;
let rows = 4;


