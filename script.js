import {
  CreateMatriz,
  CreateClass,
  addEvent,
  selectColor,
  changeColor,
  clearBoard,
  randomColors,
  removeElementsByClass,
} from './utilities.js';

const submitBtn = document.querySelector('#send');
let numberOfColors = 10;
console.log(numberOfColors);

submitBtn.addEventListener('click', () => {
  const colorQuantity = document.querySelector('#color-quantity');
  numberOfColors = parseInt(colorQuantity.value);
  removeElementsByClass('color-palette');
  if(numberOfColors <= 10) {
    CreateMatriz('color-palette', 1, 10);
  } else {
    CreateMatriz('color-palette', 1, numberOfColors);
  }
  CreateClass('color-palette', 'td', 'color');
  randomColors();

});

CreateMatriz('color-palette', 1, 10);
CreateClass('color-palette', 'td', 'color');

const boxColor = document.getElementsByClassName('color');
boxColor[0].style.backgroundColor = 'white';
boxColor[0].className += ' selected';

// Gera cores aleatórias
randomColors();

CreateMatriz('pixel-board', 24, 24);
CreateClass('pixel-board', 'td', 'pixel');

addEvent('pixel', 'click', changeColor);
addEvent('color', 'click', selectColor);
document.getElementById('clear-board').addEventListener('click', clearBoard);
