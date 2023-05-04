const newButton = document.querySelector('.grid-btn');
const gridContainer = document.querySelector('.grid-container');

function cardDisplay() {
  gridContainer.classList.toggle('open');
  if (newButton.innerHTML === 'view more') {
    newButton.innerHTML = 'view less';
  } else {
    newButton.innerHTML = 'view more';
  }
}
export { cardDisplay, newButton };