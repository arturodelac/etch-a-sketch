//selects the grid container
const container = document.querySelector('.grid-container');
container.setAttribute('style', 'grid-template-columns: repeat(16, 1fr);');

//grids variables
let gridSide = 16;
let noOfGrids = gridSide * gridSide;

gridCreator(noOfGrids);
let allGrids = container.querySelectorAll('.grid');

paintGrid();


//creates emptydivs for grid
function gridCreator(noOfGrids) {
    for (i = 1; i <= noOfGrids; i++) {
        const grid = document.createElement('div');
        grid.classList.add('grid');
        container.appendChild(grid);
    }
}
//paints grid on mouseover event
function paintGrid() {
    allGrids = container.querySelectorAll('.grid');
    allGrids.forEach((grids) => {
        grids.addEventListener('mouseover', () => {
            grids.classList.add('grid-transformed');
            grids.style.backgroundColor = 'rgb(0,0,0)'
        })
    });
}

//click function
allGrids.forEach((grids) => {
    grids.addEventListener('click', () => {
        grids.classList.remove('grid-transformed');
        grids.style.backgroundColor = 'rgb(255,255,255)'

    })
});


//color mode button
const colorButton = document.querySelector('#color-mode');
colorButton.addEventListener('click', () => { paintGrid() });

//clear button
const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', () => {
    clear();
})


//function clear
function clear() {
    allGrids.forEach((grids) => {
        grids.style.backgroundColor = 'white';
        grids.classList.remove('grid-transformed')
    })
}
//rainbow mode button
let rainbowButton = document.querySelector('#rainbow-mode');
rainbowButton.addEventListener('click', () => { rainbow() });

//rainbow mode function
function rainbow() {
    allGrids.forEach((grids) => {
        grids.addEventListener('mouseover', () => {
            grids.classList.add('grid-transformed');
            const rainbowColor = color();
            grids.style.backgroundColor = rainbowColor;
        })
    });
}



//eraser button
const eraserButton = document.querySelector('#eraser');
eraserButton.addEventListener('click', () => { eraser() });


//eraser function
function eraser() {
    allGrids.forEach((grids) => {
        grids.addEventListener('mouseover', () => {
            grids.classList.remove('grid-transformed');
            grids.style.backgroundColor = 'rgb(255,255,255)'
        })
    });
}

//creates random color
function color() {
    const availableColors = ["red", "blue", "yellow", "green"]
    selectedColor = availableColors[Math.floor(Math.random() * availableColors.length)];
    return selectedColor;
}
//enables slider 
const slider = document.getElementById("myRange");
const output = document.getElementById("output");
output.innerHTML = ((slider.value) + "x" + (slider.value)); //displays current value

//updates output value
slider.oninput = function() {
    output.innerHTML = this.value + "x" + this.value;
    gridSide = this.value;
    container.setAttribute('style', 'grid-template-columns: repeat(' + gridSide + ', 1fr);');
    noOfGrids = gridSide * gridSide;
    deleteGrid();
    gridCreator(noOfGrids);
    paintGrid();
}

//color picker 
const colorPicker = document.getElementById("colorP");
colorPicker.oninput = function() {
    allGrids.forEach((grids) => {
        grids.addEventListener('mouseover', () => {
            grids.classList.add('grid-transformed');
            grids.style.backgroundColor = this.value;
        })
    });
    const transformedGrids = container.querySelectorAll('.grid-transformed');
    transformedGrids.forEach((tgrid) => { tgrid.setAttribute('style', 'background-color:' + this.value + ';') });


}



//deletes grid
function deleteGrid() {
    let oldGrid = container.querySelectorAll('.grid');
    oldGrid.forEach(grid => { container.removeChild(grid) })

}

//opacity button
const opacityButton = document.querySelector('#opacity-mode');
opacityButton.addEventListener('click', () => { addShade() });

//opacity function
function addShade() {
    //clear();
    allGrids.forEach((grids) => {
        let bgColor = window.getComputedStyle(grids).getPropertyValue('background-color');
        console.log(bgColor);
        grids.addEventListener('mouseover', () => {
            switch (bgColor) {
                case 'rgb(0, 0, 0)':
                    console.log(bgColor);
                    grids.setAttribute('style', 'background-color:rgb(0,0,0);');
                    break;
                case 'rgb(25, 25, 25)':
                    grids.setAttribute('style', 'background-color:rgb(25,25,25);');
                    break;
                case 'rgb(50, 50, 50)':
                    grids.setAttribute('style', 'background-color:rgb(25,25,25);');
                    break;
                case 'rgb(75, 75, 75)':
                    grids.setAttribute('style', 'background-color:rgb(50,50,50);');
                    break;
                case 'rgb(100, 100, 100)':
                    grids.setAttribute('style', 'background-color:rgb(75,75,75);');
                    break;
                case 'rgb(125, 125, 125)':
                    grids.setAttribute('style', 'background-color:rgb(100,100,100);');
                    break;
                case 'rgb(150, 150, 150)':
                    grids.setAttribute('style', 'background-color:rgb(125,125,125);');
                    break;
                case 'rgb(175, 175, 175)':
                    grids.setAttribute('style', 'background-color:rgb(150,150,150);');
                    break;
                case 'rgb(200, 200, 200)':
                    grids.setAttribute('style', 'background-color:rgb(175,175,175);');
                    break;
                case 'rgb(225, 225, 225)':
                    console.log(bgColor);
                    grids.setAttribute('style', 'background-color:rgb(200,200,200);');
                    break;
                case 'rgb(255, 255, 255)':
                    console.log(bgColor);
                    grids.setAttribute('style', 'background-color:rgb(225,225,225);');
                    break;
                default:
                    grids.setAttribute('style', 'background-color:rgb(225,225,225);');
                    break;
            }

            bgColor = window.getComputedStyle(grids).getPropertyValue('background-color');

        })

    })
}