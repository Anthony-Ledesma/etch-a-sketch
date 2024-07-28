const container = document.querySelector('#grid-container');

function createGrid() {
    for (i = 0; i < 16; i++) {
        const row = document.createElement('div');
        row.setAttribute('class', `grid-row${i}`);
        container.appendChild(row);
        for (j = 0; j < 16; j++) {
            const getRow = document.querySelector(`.grid-row${i}`);
            const square = document.createElement('div');
            square.setAttribute('class', 'grid-square');
            getRow.appendChild(square);
        }
    }
};
createGrid();