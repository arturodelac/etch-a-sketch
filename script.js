let grids = document.querySelectorAll('.grid');




function drawing() {
    grids.forEach(grid => {
        grid.addEventListener('mouseenter', (e) => { grid.style.background = '#27211b'; })
    })
}



function buttonClickNoDrawing() {
    let gridValue = document.getElementById('text').value;
    let text = document.getElementById('grid-size');
    text.textContent = `${gridValue}x${gridValue}`
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
}



function buttonClick() {
    buttonClickNoDrawing()
    drawing();
}


drawing();

function buttonClear() {
    grids = document.querySelectorAll('.grid');
    grids.forEach(grid => { grid.style.background = '#CAB7A1' });
    drawing();
}

function randomColorSelector() {
    let randomNumber = Math.random();
    let randomColor = 'red';
    if (randomNumber <= .20) { randomColor = '#faeb2c' }
    else if (randomNumber > .20 && (randomNumber <= .40)) { randomColor = '#f52789' }
    else if (randomNumber > .40 && (randomNumber <= .60)) { randomColor = '#e900ff' }
    else if (randomNumber > .60 && (randomNumber <= .80)) { randomColor = '#1685f8' }
    else if (randomNumber > .80 && (randomNumber <= 1)) { randomColor = '#3d144c' }
    return randomColor
}

function buttonRainbow() {
    grids = document.querySelectorAll('.grid');
    buttonClickNoDrawing();
    grids.forEach(grid => {
        grid.addEventListener('mouseenter', (e) => { grid.style.background = `${randomColorSelector()}`; })
    })
}

function buttonSteps() {
    buttonClickNoDrawing();
    grids.forEach(grid => {
        grid.style.background = "rgba(39, 33, 27,0)";
    })
    grids = document.querySelectorAll('.grid');
    grids.forEach(grid => {
        grid.addEventListener('mouseenter', (e) => {
            currentColor = grid.style.background;
            switch (currentColor) {
                case "rgba(39, 33, 27, 0)":
                    grid.style.background = "rgba(39, 33, 27, 0.1)";
                    console.log('h')
                    break;
                case "rgba(39, 33, 27, 0.1)":
                    grid.style.background = "rgba(39, 33, 27, 0.2)";
                    break;
                case "rgba(39, 33, 27, 0.2)":
                    grid.style.background = "rgba(39, 33, 27, 0.3)";
                    break;
                case "rgba(39, 33, 27, 0.3)":
                    grid.style.background = "rgba(39, 33, 27, 0.4)";
                    break;
                case "rgba(39, 33, 27, 0.4)":
                    grid.style.background = "rgba(39, 33, 27, 0.5)";
                    break;
                case "rgba(39, 33, 27, 0.5)":
                    grid.style.background = "rgba(39, 33, 27, 0.6)";
                    break;
                case "rgba(39, 33, 27, 0.6)":
                    grid.style.background = "rgba(39, 33, 27, 0.7)";
                    break;
                case "rgba(39, 33, 27, 0.7)":
                    grid.style.background = "rgba(39, 33, 27, 0.8)";
                    break;
                case "rgba(39, 33, 27, 0.8)":
                    grid.style.background = "rgba(39, 33, 27, 0.9)";
                    break;
                case "rgba(39, 33, 27, 0.9)":
                    grid.style.background = "rgba(39, 33, 27, 1)";
                    break;

            }


        })
    })

}






