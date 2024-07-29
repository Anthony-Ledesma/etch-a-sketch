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

const squares = document.querySelectorAll('.grid-square');
for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener('mouseover', () => {
        squares[i].style.backgroundColor = '#000000';
    })
}
