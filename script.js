const menuBtn = document.querySelector('.menu-btn');
const reaction = document.querySelector('.menu-btn_options');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.menu-nav__item');
let showMenu = false;

function toggleMenu() {
    var menu = document.getElementById("menu");
    var menuIcon = document.querySelector(".menu-icon");
    menu.classList.toggle("active");
    menuIcon.classList.toggle("active");
  }
menuIcon.addEventListener("click", toggleMenu)  