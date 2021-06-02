function createBox(className) {
  const box = document.createElement('div');
  box.className = className;
  return box;
}

function createMatriz(elementDiv, divLine, divColumn) {
  const getElementDiv = document.getElementById(`${elementDiv}`);
  for (let i = 0; i < divLine; i += 1) {
    const line = createBox('tr');
    getElementDiv.appendChild(line);
    for (let j = 0; j < divColumn; j += 1) {
      const column = createBox('td');
      line.appendChild(column);
    }
  }
}
function createClass(elementId, elementsClass, className) {
  const getClassName = document.getElementById(`${elementId}`).getElementsByClassName(`${elementsClass}`);
  for (let index = 0; index < getClassName.length; index += 1) {
    getClassName[index].className += ` ${className}`;
  }
}

createMatriz('color-palette', 1, 4);
createClass('color-palette', 'td', 'color');
const boxColor = document.getElementsByClassName('color');
boxColor[0].style.backgroundColor = 'rgb( 0, 0, 0)';
boxColor[0].className += ' selected';
boxColor[1].style.backgroundColor = 'red';
boxColor[2].style.backgroundColor = 'green';
boxColor[3].style.backgroundColor = 'blue';

// Gera cores aleatórias
// for (let index = 0; index < boxColor.length; index += 1) {
//   const colorRed = Math.round(Math.random() * 255);
//   const colorBlue = Math.round(Math.random() * 255);
//   const colorGreen = Math.round(Math.random() * 255);
//   boxColor[index].style.backgroundColor = `rgb( ${colorRed}, ${colorGreen}, ${colorBlue})`;
// }

createMatriz('pixel-board', 5, 5);
createClass('pixel-board', 'td', 'pixel');
