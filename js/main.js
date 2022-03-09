const grid = [
    [0,0,0,1,-1],
    [0,0,1,2,2],
    [0,0,1,-1,1],
    [1,1,2,1,1],
    [1,-1,1,0,0]
];




function Cell(value) {
    this.value=value;
    this.isRevealed=false;
    this.isBomb = value==-1?true:false;




}


var grid_html = document.getElementById("grid");
grid.forEach((row,i) =>{
    var new_row = document.createElement("tr");
    row.forEach((cell,j) =>{
        var new_cell = document.createElement("td");
        new_cell.textContent = '';
        new_cell.isRevealed=false;
        new_cell.cell_state = cell;
        new_cell.classList.add("cell");
        new_cell.addEventListener("click",(evt) =>{
            reveal(i,j);
            
        })
        new_row.appendChild(new_cell);
    })
    grid_html.appendChild(new_row);
})

function reveal(i,j){
    let cell = grid_html.children[i].children[j];
    if(cell.isRevealed==false){
        cell.isRevealed=true;
        if(cell.cell_state==-1){
            lose();
        }
        cell.textContent=cell.cell_state;
    }
    
}
function lose(){
   revealAll();
   alert("You lost the game");
}   

function revealAll(){
    for (let i = 0; i < grid.length; i++) 
        for (let j = 0; j < grid.length; j++) 
            {
                let cell = grid_html.children[i].children[j];
                cell.textContent=cell.cell_state;
            }
    
}
        



function floodfill(i,j){
    reveal(i,j);
    floodfill(i+1,j);
    floodfill(i-1,j);
    floodfill(i,j+1);
    floodfill(i,j-1);
}
