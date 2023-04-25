const menuBtn = document.querySelector('.menu-btn');
const reaction = document.querySelector('.menu-btn_options');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.menu-nav__item');
let showMenu = false;
//  clock querySelector
const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');
const second = document.querySelector('.second');

const updateTime = () => {
  const currentTime = new Date();

  let currentHour = currentTime.getHours();
  const currentMinute = currentTime.getMinutes();
  const currentSecond = currentTime.getSeconds();

  if (currentHour > 12) {
    currentHour -= 12;
  }
  hour.textContent = currentHour.toString();
  minute.textContent = currentMinute.toString().padStart(2, '0');
  second.textContent = currentSecond.toString();
};
setInterval(updateTime, 1000);
updateTime();

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

const languages = ['css', 'js', 'python', 'ruby', 'html', 'node js', 'typescript', 'c++'];
const names = ['Isaac', 'Nathaniel', 'Akoke', 'Bakeung', 'Bobai', 'Akutsang', 'Zizoh', 'Daniel'];

const dynamic = document.querySelector('.grid-container');
for (let i = 0; i < languages.length; i += 1) {
  const fetch = document.querySelector('.grid-container').innerHTML;
  // very important to note these are backticks not single quotation below;
  dynamic.innerHTML = `<div id="cards${i}" class="boxes">
  <div class="box-content">
  <h2>${languages[i]}</h2>
  <p>
  ${names[i]}
  </p>
  <a href="#">ReadMore</a>
  </div>
</div>${fetch}`;
  const bgimg = document.getElementById(`cards${i}`);
  bgimg.style.backgroundImage = `url(/capstone-assets/${names[i]}.jpeg)`;
}

const toggleBtn = document.querySelector('.toggle-btn');
const footerLinks = document.querySelector('.footer-links');

toggleBtn.addEventListener('click', () => {
  footerLinks.classList.toggle('show');
});