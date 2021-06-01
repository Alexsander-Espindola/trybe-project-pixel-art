window.onload = function (){
  let docType = document.getElementById("table");

  function createBox (className){
    let box = document.createElement("div");
    box.className = className;
    return box;
  }

  let table = document.getElementById('table');
  console.log(table);

  function createMatriz (divLine, divColumn) {
    for(let i = 0; i < divLine; i += 1){
      let line = createBox("tr");
      docType.appendChild(line);
      for(let j = 0; j < divColumn; j += 1 ){
            let column = createBox("td box");
            line.appendChild(column);
      }
    }
  }

  createMatriz(1, 4);
  let collorPalette = document.getElementsByClassName("tr");
  collorPalette[0].className = "tr color"

  createMatriz(5, 5);















}