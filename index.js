let container = document.querySelector('#container');
container.style.display = 'grid';
container.style.gridTemplateRows = 'repeat(var(--grid-rows), auto)';
container.style.gridTemplateColumns = 'repeat(var(--grid-cols), auto)';
container.style.width = '700px';
container.style.height = '700px';

let btnContainer = document.querySelector('#btnContainer');
let startBtn = document.createElement('button');
startBtn.textContent = 'Grid Size/Reset';
btnContainer.appendChild(startBtn);

let rows = 16;
let cols = 16;

function makeRows(rows, cols){
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (i = 0; i < (rows * cols); i++){
    let cell = document.createElement('div');
    container.appendChild(cell).className = 'grid-item';
    cell.style.border = '1px solid #ddd';
    cell.style.textAlign = 'center';
  }
}

makeRows(rows, cols);

  let cells = document.querySelectorAll('.grid-item');
  let cell = document.querySelector('.grid-item');
  cells.forEach(cell => {
    cell.addEventListener('mouseover', function (e){
      cell.style.backgroundColor = 'black';
    });
  });

  startBtn.addEventListener('click', function (e){
    container.textContent = '';
    let ask = prompt('Enter size of your grid');
    let rows = ask;
    let cols = ask;
    makeRows(rows, cols);

    let cells = document.querySelectorAll('.grid-item');
    let cell = document.querySelector('.grid-item');
    cells.forEach(cell => {
      cell.addEventListener('mouseover', function (e){
        cell.style.backgroundColor = 'black';
      });
    });


  });


  resetBtn.addEventListener('click', function (e){
  cells.forEach(cell => {
    cell.style.backgroundColor = 'white';
    });
  });
