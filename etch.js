const container = document.querySelector("#container");

for (i = 0; i < 256; i++) {
    const div = document.createElement('div');
    div.setAttribute("class", "cell");
    container.appendChild(div);
}