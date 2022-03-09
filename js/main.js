const grid = [
    [0,0,0,1,-1],
    [0,0,1,2,2],
    [0,0,1,-1,1],
    [1,1,2,1,1],
    [1,-1,1,0,0]
];

var grid_html = document.getElementById("grid");
grid.forEach(row =>{
    var new_row = document.createElement("tr");
    row.forEach(cell =>{
        var new_cell = document.createElement("td");
        new_cell.textContent = '';
        new_cell.cell_state = cell;
        new_cell.classList.add("cell");
        new_cell.addEventListener("click",(evt) =>{
            new_cell.textContent = new_cell.cell_state;
            //floodfill
        })
        new_row.appendChild(new_cell);
    })
    grid_html.appendChild(new_row);
})
