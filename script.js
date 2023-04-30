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

const data = [
  {
    name: 'Daniel Samuel',
    role: 'fullstack Developer',
    link: 'https://github.com/DanSam5K',
    image: 'capstone-assets/Daniel.jpeg',
  },
  {
    name: 'Zizoh Anto',
    role: 'Andriod Developer',
    link: 'https://github.com/zizoh',
    image: 'capstone-assets/Zizoh.jpeg',
  },
  {
    name: 'Anto Victor Akoke',
    role: 'Fullstack Developer',
    link: 'https://github.com/antoHero',
    image: 'capstone-assets/Akoke.jpeg',
  },
  {
    name: 'Bobai Yakubu',
    role: 'FrontEnd Developer',
    link: 'https://github.com/Phildeoner',
    image: 'capstone-assets/Bobai.jpeg',
  },
  {
    name: 'Bakeung Dickson',
    role: 'FrontEnd developer',
    link: 'https://github.com/BlaizDickson',
    image: 'capstone-assets/Bakeung.jpeg',
  },
  {
    name: 'Isaac Bakoshi',
    role: 'FrontEnd Developer',
    link: 'https://github.com/Kadunapikin',
    image: 'capstone-assets/Isaac.jpeg',
  },
  {
    name: 'Joshua Nathaniel',
    role: 'FrontEnd Developer',
    link: 'https://github.com/Bazzy09',
    image: 'capstone-assets/Nathaniel.jpeg',
  },
  {
    name: 'Akutsang Kaze',
    role: 'FrontEnd Developer',
    link: 'https://github.com/akuutsang',
    image: 'capstone-assets/Akutsang.jpeg',
  },
];


data.forEach((element, i) => {
  const gridContainer = document.querySelector('.grid-container');
  const box = document.createElement('div');
  box.classList = 'boxes';
  const boxItem = `
  <div class="boxes">
          <img class= "img" src="${data[i].image}" alt="">
        </div>
        <div class="info">
         <h5>${data[i].name}</h5>
         <h6>${data[i].role}</h6>
         <a href="${data[i].link}">Readmore</a>
        </div>`
  box.innerHTML += boxItem;
  gridContainer.appendChild(box)

});




// data.forEach((element, i) => {
//   const gridContainer = document.querySelector('.grid-container');
//   const box = document.createElement('div');
//   box.classList = 'boxes';
//   const boxItem = `
//   <img class= "img" src="${data[i].image}" alt="">
//   <div class="info">
//     <h2>${data[i].name}</h2>
//     <p>${data[i].role}</p>
//     <a href="${data[i].link}">Readmore</a>
//    </div>`
//   box.innerHTML += boxItem;
//   gridContainer.appendChild(box)

// });


const toggleBtn = document.querySelector('.toggle-btn');
const footerLinks = document.querySelector('.footer-links');

toggleBtn.addEventListener('click', () => {
  footerLinks.classList.toggle('show');
});