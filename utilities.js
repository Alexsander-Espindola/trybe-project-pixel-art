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
function CreateClass(elementId, elementsClass, className) {
  const getClassName = document.getElementById(`${elementId}`)
    .getElementsByClassName(`${elementsClass}`);
  for (let index = 0; index < getClassName.length; index += 1) {
    getClassName[index].className += ` ${className}`;
  }
}

function addEvent(className, eventName, functionSelected) {
  const classList = document.getElementsByClassName(`${className}`);
  for (let index = 0; index < classList.length; index += 1) {
    classList[index].addEventListener(`${eventName}`, functionSelected);
  }
}

function verificaSelected(nameClass) {
  const listColor = document.getElementsByClassName(`${nameClass}`);
  for (let index = 0; index < listColor.length; index += 1) {
    const positionClass = listColor[index].classList;
    if (positionClass[2] === 'selected') {
      listColor[index].className = `${positionClass[0]} ${positionClass[1]}`;
    }
  }
}

function selectColor(event) {
  verificaSelected('color');
  const divTarget = event.target;
  divTarget.className += ' selected';
  console.log(divTarget);
}

function changeColor(event) {
  const divTarget = event.target;
  const color = document.getElementsByClassName('selected')[0].style.backgroundColor;
  divTarget.style.backgroundColor = `${color}`;
}

function clearBoard() {
  const listPixel = document.getElementsByClassName('pixel');
  for (let index = 0; index < listPixel.length; index += 1) {
    listPixel[index].style.backgroundColor = 'white';
  }
}

export {
  CreateMatriz,
  CreateClass,
  addEvent,
  selectColor,
  changeColor,
  clearBoard,
};
