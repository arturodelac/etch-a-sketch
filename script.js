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
        grid.style.background = '#27211b';
        grid.style.opacity = '0%';
    })
    grids = document.querySelectorAll('.grid');
    grids.forEach(grid => {
        grid.addEventListener('mouseenter', (e) => {
            currentColor = grid.style.opacity;
            switch (currentColor) {
                case "0":
                    grid.style.opacity = "0.1";
                    break;
                case "0.1":
                    grid.style.opacity = "0.2";
                    break;
                case "0.2":
                    grid.style.opacity = "0.3";
                    break;
                case "0.3":
                    grid.style.opacity = "0.4";
                    break;
                case "0.4":
                    grid.style.opacity = "0.5";
                    break;
                case "0.5":
                    grid.style.opacity = "0.6";
                    break;
                case "0.6":
                    grid.style.opacity = "0.7";
                    break;
                case "0.7":
                    grid.style.opacity = "0.8";
                    break;

            }


        })
    })

}






