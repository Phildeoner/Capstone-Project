const menuBtn = document.querySelector('.menu-btn');
const reaction = document.querySelector('.menu-btn_options');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.menu-nav__item');
let showMenu = false;



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

let languages =["css","js","python","ruby","html","node js","typescript","c++"];
let names =["Isaac","Nathaniel","Akoke","Bakueng","Bobai","Winnie","Zizoh","Daniel"];
let dynamic = document.querySelector(".grid-container");
for (let i = 0; i < names.length; i++) {
  dynamic.innerHTML = `<div class="boxes">
  <div class="box-content">
      <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, incidunt.
      </h2>
      <p>Lorem ipsum dolor sit amet.</p>
      <a href="#">ReadMore</a>
  </div>
</div>`
}


