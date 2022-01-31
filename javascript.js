//selects the grid container
const container = document.querySelector('.grid-container');

//grids variables
let gridSide = 16;
let gridWidth = (600/gridSide);
let noOfGrids = 16*16;
gridCreator(noOfGrids);
const allGrids = container.querySelectorAll('.grid');

paintGrid();


//creates emptydivs for grid
function gridCreator(noOfGrids){
    for(i=1;i<=noOfGrids;i++) {
        const grid = document.createElement('div');
        grid.classList.add('grid');
        container.appendChild(grid);
        grid.setAttribute('style','width:'+gridWidth+'px;height:'+gridWidth+'px;')
    }
}
//paints grid on mouseover event
function paintGrid(){
allGrids.forEach((grids) => {grids.style.backgroundColor = 'white';grids.classList.remove('grid-transformed');grids.addEventListener('mouseover',()=> {grids.classList.add('grid-transformed');grids.style.backgroundColor = 'black'})});
}

//color mode button
const colorButton = document.querySelector('#color-mode');
colorButton.addEventListener('click',()=> {paintGrid()});

//clear button
const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click',()=> {allGrids.forEach((grids) => {grids.style.backgroundColor = 'white';grids.classList.remove('grid-transformed')})})

//rainbow mode button
let rainbowButton = document.querySelector('#rainbow-mode');
rainbowButton.addEventListener('click',()=> {rainbow()});

//rainbow mode function
function rainbow(){
    allGrids.forEach((grids) => {grids.classList.remove('grid-transformed');grids.style.backgroundColor = 'white';grids.addEventListener('mouseover',()=> {grids.classList.add('grid-transformed');const rainbowColor = color();grids.style.backgroundColor = rainbowColor;})});   
}

//eraser button
const eraserButton = document.querySelector('#eraser');
eraserButton.addEventListener('click',()=> {eraser()});


//eraser function
function eraser() {
allGrids.forEach((grids) => {grids.addEventListener('mouseover',()=> {grids.style.backgroundColor = 'white'})});
}





//creates random color
function color(){
    const availableColors = ["red","blue","yellow","green"] 
    selectedColor = availableColors[Math.floor(Math.random()*availableColors.length)];
    return selectedColor;}



