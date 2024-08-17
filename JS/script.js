const container = document.querySelector('#grid-container');

const button = document.querySelector('#reset-button');

createGrid();

button.addEventListener('click', function confirmWidth() {
    let answer = prompt('How many squares wide would you like to make the canvas?', '16');
    if (Number(answer) > 100) {
        confirmWidth();
    } else {
        function deleteGrid() {
            const getSquares = document.querySelectorAll('.grid-square');

            getSquares.forEach((box) => box.remove());
            const rows = document.querySelectorAll('[class*="grid-row"]');
            rows.forEach(row => row.remove)
            };
            deleteGrid();
        createGrid(answer);
    }
})


function createGrid(width = 16) {
    for (i = 0; i <= width; i++) {
        const row = document.createElement('div');
        row.setAttribute('class', `grid-row${i}`);
        container.appendChild(row);
        for (j = 0; j <= width; j++) {
            const getRow = document.querySelector(`.grid-row${i}`);
            const square = document.createElement('div');
            square.setAttribute('class', 'grid-square');
            getRow.appendChild(square);
        }
    }
    initiateEventListener();
};

function initiateEventListener() {
    const squares = document.querySelectorAll('.grid-square');

    for (let i = 0; i < squares.length; i++) {
        squares[i].addEventListener('mouseover', () => {
            squares[i].style.backgroundColor = '#000000';
        });
    };
};