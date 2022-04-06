// Select container
const container = document.querySelector("#container");

// Add grid cells to container
for (i = 0; i < 256; i++) {
    const div = document.createElement('div');
    div.setAttribute("class", "cell");
    container.appendChild(div);
}

// Select cells
const cells = document.querySelectorAll(".cell");

// Logic for changing cell colors on hover
cells.forEach((cell) => {
    cell.addEventListener("mouseover", (event) => {
        event.target.style.backgroundColor = "black";
    });
});