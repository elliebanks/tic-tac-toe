
const cells = document.querySelectorAll(".row > div");
const restartBtn = document.querySelector('#restart');
const winText = document.querySelector('#win-text')
// X will be the first player
let moves = 0
let currentPlayer = "X";

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", cellClicked)
}

restartBtn.addEventListener("click", restart)


function cellClicked(e) {
    let cell = e.target
    if (cell.textContent !== "") return

    cell.textContent = currentPlayer;
    moves++

    if (moves > 2) {
        playerWon()
    }
    switchPlayer()
    playerDraw()
};

function switchPlayer() {
    if (currentPlayer === "X") {
        currentPlayer = "O"
    } else {
        currentPlayer = "X"
    }
}

const winningCondtions = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [4, 1, 7],
    [4, 3, 5],
    [2, 5, 8],
    [2, 4, 6],
    [6, 7, 8],
]
function playerWon() {
    if (cells[0].textContent === currentPlayer) {
        if (cells[1].textContent === currentPlayer && cells[2].textContent === currentPlayer) {
            winText.textContent = `${currentPlayer} wins!`;
            console.log(`${currentPlayer} wins`)
            gameOver = true;
        }
        if (cells[3].textContent === currentPlayer && cells[6].textContent === currentPlayer) {
            winText.textContent = `${currentPlayer} wins!`;
            gameOver = true;
        }
        if (cells[4].textContent === currentPlayer && cells[8].textContent === currentPlayer) {
            winText.textContent = `${currentPlayer} wins!`;
            gameOver = true;
        }
    }
    if (cells[4].textContent === currentPlayer) {
        if (cells[3].textContent === currentPlayer && cells[5].textContent === currentPlayer) {
            winText.textContent = `${currentPlayer} wins!`;
            gameOver = true;
        }
        if (cells[1].textContent === currentPlayer && cells[7].textContent === currentPlayer) {
            winText.textContent = `${currentPlayer} wins!`;
            gameOver = true;
        }
    }
    if (cells[6].textContent === currentPlayer) {
        if (cells[7].textContent === currentPlayer && cells[8].textContent === currentPlayer) {
            winText.textContent = `${currentPlayer} wins!`;
            gameOver = true;
        }
    }
    if (cells[2].textContent === currentPlayer) {
        if (cells[5].textContent === currentPlayer && cells[8].textContent === currentPlayer) {
            winText.textContent = `${currentPlayer} wins!`;
            gameOver = true;
        }
        if (cells[4].textContent === currentPlayer && cells[6].textContent === currentPlayer) {
            winText.textContent = `${currentPlayer} wins!`;
            gameOver = true;
        }
    }
};

let gameOver = false;

function playerDraw() {
    let draw = 0;
    cells.forEach((cell, i) => {
        if (cell.textContent !== "") draw++;
    });
    if (draw === 9 && gameOver !== true) {
        console.log("draw");
        winText.textContent = "draw!";
        cells.forEach(cell => cell.removeEventListener("click", cellClicked))
    }
};


function restart() {
    window.location.reload()
};


