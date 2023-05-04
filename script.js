import { toggleMenu, menuBtn } from './toggle.js';
import updateTime from './utils.js';
import card from './data.js';
import { cardDisplay, newButton } from './more.js';

card();

setInterval(updateTime, 1000);

newButton.addEventListener('click', cardDisplay);

menuBtn.addEventListener('click', toggleMenu);