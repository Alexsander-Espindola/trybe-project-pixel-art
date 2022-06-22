// import { useState } from './node_modules/react';
import {
  CreateMatriz,
  CreateClass,
  addEvent,
  selectColor,
  changeColor,
  clearBoard,
} from './utilities';

// const [numberOfColors, setNumberOfColors] = useState(10);
const numberOfColors = 10;

const submitBtn = document.querySelector('#send');

submitBtn.addEventListener('click', () => {
  const colorQuantity = document.querySelector('#color-quantity');
  // eslint-disable-next-line radix
  // setNumberOfColors(parseInt(colorQuantity.value));
  console.log(colorQuantity);
});

CreateMatriz('color-palette', 1, numberOfColors);
CreateClass('color-palette', 'td', 'color');
const boxColor = document.getElementsByClassName('color');
boxColor[0].style.backgroundColor = 'white';
boxColor[0].className += ' selected';

// Gera cores aleatórias
for (let index = 1; index < boxColor.length; index += 1) {
  const colorRed = Math.round(Math.random() * 255);
  const colorBlue = Math.round(Math.random() * 255);
  const colorGreen = Math.round(Math.random() * 255);
  boxColor[index].style.backgroundColor = `rgb( ${colorRed}, ${colorGreen}, ${colorBlue})`;
}

CreateMatriz('pixel-board', 24, 24);
CreateClass('pixel-board', 'td', 'pixel');

addEvent('pixel', 'click', changeColor);
addEvent('color', 'click', selectColor);
document.getElementById('clear-board').addEventListener('click', clearBoard);
