const docType = document.getElementById('color-palette');

function createBox(className) {
  const box = document.createElement('div');
  box.className = className;
  return box;
}

function createMatriz(divLine, divColumn, trClassName, tdClassName) {
  for (let i = 0; i < divLine; i += 1) {
    const line = createBox(`tr ${trClassName}`);
    docType.appendChild(line);
    for (let j = 0; j < divColumn; j += 1) {
      const column = createBox(`td ${tdClassName}`);
      line.appendChild(column);
    }
  }
}
createMatriz(1, 4, '', ' color box');
const boxColor = document.getElementsByClassName('color');

for (let index = 0; index < boxColor.length; index += 1) {
  const colorRed = Math.round(Math.random() * 255);
  const colorBlue = Math.round(Math.random() * 255);
  const colorGreen = Math.round(Math.random() * 255);
  boxColor[index].style.backgroundColor = `rgb( ${colorRed}, ${colorGreen}, ${colorBlue})`;

}
createMatriz(5, 5, ' box', ' box');
