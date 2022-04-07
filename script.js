// Initialize default grid size and color mode
let gridSize = 256;
let gridLength = 16;
const modeButton = document.querySelector("#mode");
let colorMode = 0;

// Select container and cells
const container = document.querySelector("#container");
let cells = document.querySelectorAll(".cell");

// Function to add grid cells to container
function addCells() {
    for (i = 0; i < gridSize; i++) {
        const div = document.createElement('div');
        div.setAttribute("class", "cell");
        container.appendChild(div);
    }

    // Select cells
    cells = document.querySelectorAll(".cell");

    // Logic for changing cell colors on mouseover
    cells.forEach((cell) => {
        cell.addEventListener("mouseover", (event) => {
            if (colorMode === 0) {
                event.target.style.backgroundColor = "black";
            } else if (colorMode === 1) {
                event.target.style.backgroundColor = `rgb(${randomRGB()}, ${randomRGB()}, ${randomRGB()})`;
            }
        });
    });
}

// Select clear button
const clear = document.querySelector("#clear");

// Logic for clearing grid on button press
clear.addEventListener("click", () => {
    cells.forEach((cell) => {
        cell.style.backgroundColor = "";
    });
    createGrid();
});

// Function to prompt user for new grid size
function createGrid() {
    do {
        gridLength = prompt("Enter the number of squares per side for the new grid (min 1, max 100): ");
    } while (gridLength < 1 || gridLength > 100);
    
    gridSize = Math.pow(gridLength, 2);

    // Remove current grid
    cells.forEach((cell) => {
        container.removeChild(cell);
    });

    // Create new grid
    container.style.gridTemplateRows = `repeat(${gridLength}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${gridLength}, 1fr)`;

    // Add grid cells to container
    addCells();
}

// Logic for changing color mode
modeButton.addEventListener("click", () => {
    if (colorMode === 0) {
        modeButton.textContent = "Color";
        colorMode = 1;
        
    } else if (colorMode === 1) {
        modeButton.textContent = "B&W";
        colorMode = 0;
    }
});

// Function to generate random RGB number
function randomRGB() {
    return Math.floor(Math.random() * 256);
}

// Populate grid
addCells();