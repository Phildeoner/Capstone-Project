import updateTime from './utils.js';
import card from './data.js';

setInterval(updateTime, 1000);
card();
const toggleBtn = document.querySelector('.toggle-btn');
const footerLinks = document.querySelector('.footer-links');

toggleBtn.addEventListener('click', () => {
  footerLinks.classList.toggle('show');
});