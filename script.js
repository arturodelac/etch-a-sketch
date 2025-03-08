let grids = document.querySelectorAll('.grid');




function drawing() {
    grids.forEach(grid => {
        grid.addEventListener('mouseenter', (e) => { grid.style.background = 'blue'; })
    })
}





function buttonClick() {
    let gridValue = document.getElementById('text').value;
    console.log(gridValue)
    grids = document.querySelectorAll('.grid');
    grids.forEach(grid => grid.remove())
    let gridContainer = document.getElementById('grid-container');
    let counter = 0;
    while (counter < gridValue * gridValue) {
        let newGrid = document.createElement('div');
        gridContainer.appendChild(newGrid)
        newGrid.classList.add('grid');
        newGrid.style.flexBasis = (`${100 / ((gridValue * gridValue) / gridValue)}%`);
        newGrid.style.height = newGrid.style.width;
        newGrid = 0;
        counter++
    }
    grids = document.querySelectorAll('.grid');
    drawing();
}


drawing()

