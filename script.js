import updateTime from './utils.js';
import card from './data.js';
import { cardDisplay, newButton } from './more.js';

card();
updateTime();
newButton.addEventListener('click', cardDisplay);
