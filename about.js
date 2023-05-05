import { toggleMenu, menuBtn } from './toggle.js';
import updateTime from './utils.js';

menuBtn.addEventListener('click', toggleMenu);

updateTime();