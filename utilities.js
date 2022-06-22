function createBox(className) {
  const box = document.createElement('div');
  box.className = className;
  return box;
}

function CreateMatriz(elementDiv, divLine, divColumn) {
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

export default CreateMatriz;
