const menuBtn = document.querySelector('.menu-btn');
const reaction = document.querySelector('.menu-btn_options');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.menu-nav__item');
let showMenu = false;
//  clock querySelector
const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second")




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
let names =["Isaac","Nathaniel","Akoke","Bakueng","Bobai","Akutsang","Zizoh","Daniel"];

let dynamic = document.querySelector(".grid-container");
for (let i = 0; i < languages.length; i++) {
  let fetch = document.querySelector(".grid-container").innerHTML;
  // very important to note these are backticks not single quotation below;
  dynamic.innerHTML = `<div id="cards${i}" class="boxes">
  <div class="box-content">
  <h2>${languages[i]}</h2>
  <p>
  ${names[i]}
  </p>
  <a href="#">ReadMore</a>
  </div>
</div>` + fetch;
let bgimg = document.getElementById(`cards${i}`);
bgimg.style.backgroundImage = `url(/capstone-assets/${names[i]}.jpeg)`

}