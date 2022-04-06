// Initialize default grid size
let gridSize = 256;
let gridLength = 16;

// Select container
const container = document.querySelector("#container");

// Add grid cells to container
for (i = 0; i < gridSize; i++) {
    const div = document.createElement('div');
    div.setAttribute("class", "cell");
    container.appendChild(div);
}

// Select cells
let cells = document.querySelectorAll(".cell");

// Logic for changing cell colors on mouseover
cells.forEach((cell) => {
    cell.addEventListener("mouseover", (event) => {
        event.target.style.backgroundColor = "black";
    });
});

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
        gridLength = prompt("Enter the number of squares per side for the new grid: ");
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
            event.target.style.backgroundColor = "black";
        });
    });
}