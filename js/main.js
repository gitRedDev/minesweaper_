const N = 5;
const M = 5;

const grid = [
  [0, 0, 0, 1, -1],
  [0, 0, 1, 2, 2],
  [0, 0, 1, -1, 1],
  [1, 1, 2, 1, 1],
  [1, -1, 1, 0, 0],
];

const gridCells = grid.map((row) => Array(row.length));

function Cell(value, domCell) {
  this.value = value;
  this.isRevealed = false;
  this.isBomb = value === -1;
  this.domCell = domCell;
}

const grid_html = document.getElementById("grid");

grid.forEach((row, i) => {
  const new_row = document.createElement("tr");

  row.forEach((value, j) => {
    const new_cell = document.createElement("td");
    new_cell.classList.add("cell");
    new_cell.addEventListener("click", () => {
      if (gridCells[i][j].isBomb) {
        revealAll();
        alert("Game over!");
      } else {
        floodfill(i, j);
      }
    });
    new_row.appendChild(new_cell);

    gridCells[i][j] = new Cell(value, new_cell);
  });

  grid_html.appendChild(new_row);
});

const reveal = (gridCell) => {
  gridCell.isRevealed = true;
  gridCell.domCell.textContent = gridCell.value;
};

const revealAll = () => {
  gridCells.forEach((row) => row.forEach(reveal));
};

const floodfill = (i, j) => {
  if (
    i >= 0 &&
    i < N &&
    j >= 0 &&
    j < M &&
    !gridCells[i][j].isRevealed &&
    gridCells[i][j] !== -1
  ) {
    reveal(gridCells[i][j]);

    if (gridCells[i][j].value === 0) {
      floodfill(i + 1, j);
      floodfill(i - 1, j);
      floodfill(i, j + 1);
      floodfill(i, j - 1);
    }
  }

  return false;
};
