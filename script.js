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

CreateMatriz('color-palette', 1, 10);
CreateClass('color-palette', 'td', 'color');
randomColors();

CreateMatriz('pixel-board', 24, 24);
CreateClass('pixel-board', 'td', 'pixel');

addEvent('pixel', 'click', changeColor);
addEvent('color', 'click', selectColor);
document.getElementById('clear-board').addEventListener('click', clearBoard);

const submitBtn = document.querySelector('#send');
const sendBoard = document.querySelector('#send-board');

sendBoard.addEventListener('click', () => {
  const columnBoard = document.querySelector('#column-board');
  const lineBoard = document.querySelector('#line-board');

  const lines = parseInt(columnBoard.value);
  const columns = parseInt(lineBoard.value);
  console.log(lines, columns);

  removeElementsByClass('pixel-board');

  const verifyInputToLineBoard = lines <= 10 && lines >= 24 || !lineBoard;
  const verifyInputToColumnBoard = columnBoard <= 10 || !columnBoard;

  CreateMatriz('pixel-board', lines, columns);
  CreateClass('pixel-board', 'td', 'pixel');

  addEvent('pixel', 'click', changeColor);

});

submitBtn.addEventListener('click', () => {
  const colorQuantity = document.querySelector('#color-quantity');
  const numberOfColors = parseInt(colorQuantity.value);
  removeElementsByClass('color-palette');

  if(numberOfColors <= 10 || !numberOfColors) {
    CreateMatriz('color-palette', 1, 10);
  } else {
    CreateMatriz('color-palette', 1, numberOfColors);
  }
  CreateClass('color-palette', 'td', 'color');
  randomColors();

  addEvent('color', 'click', selectColor);
});

