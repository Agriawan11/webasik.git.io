
let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];
let currentPlayer = Math.floor(Math.random() *2)+1;

function start(){
    if(currentPlayer == 1){
        currentPlayer ='X';
        setMessage("sekarang giliran pemain 1 pemegang X");
    } else{
        currentPlayer = 'O';
        setMessage("sekarang giliran pemain 2 pemegang O");
    }
    
}
let gameOver = false;

function handleMove(row, col) {
    if (!gameOver && board[row][col] === '') {
        board[row][col] = currentPlayer;
        renderBoard();
        let winner = checkWinner();
        if (winner) {
            gameOver = true;
            if (winner === 'draw') {
                setMessage("It's a draw!");
            } else {
                setMessage("Player " + winner + " wins!");
            }
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            setMessage("sekarang giliran " + currentPlayer + "'s ");
        }
    }
}

function checkWinner() {
    // Check rows
    for (let i = 0; i < 3; i++) {
        if (board[i][0] !== '' && board[i][0] === board[i][1] && board[i][0] === board[i][2]) {
            return board[i][0];
        }
    }
    // Check columns
    for (let i = 0; i < 3; i++) {
        if (board[0][i] !== '' && board[0][i] === board[1][i] && board[0][i] === board[2][i]) {
            return board[0][i];
        }
    }
    // Check diagonals
    if (board[0][0] !== '' && board[0][0] === board[1][1] && board[0][0] === board[2][2]) {
        return board[0][0];
    }
    if (board[0][2] !== '' && board[0][2] === board[1][1] && board[0][2] === board[2][0]) {
        return board[0][2];
    }
    // Check if it's a draw
    if (!board.flat().includes('')) {
        return 'draw';
    }
    return null;
}

function setMessage(message) {
    document.getElementById('message').innerText = message;
}

function renderBoard() {
    let cells = document.querySelectorAll('.cell');
    cells.forEach((cell, index) => {
        let row = Math.floor(index / 3);
        let col = index % 3;
        cell.innerText = board[row][col];
    });
}

function resetGame() {
    board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];
    currentPlayer = 'X';
    gameOver = false;
    setMessage("Player " + currentPlayer + "'s turn");
    renderBoard();
}

function restart(){
    location.reload();
}