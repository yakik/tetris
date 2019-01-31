import { getCellValue } from "./board.js"

var canvas, ctx, secondCanvas, secondCTX
var firstTime = true

export function redraw(board) {
    drawGame(ctx, board.rows, board.cols, canvas.height, canvas.width, board)
}

export function setCanvas(boardWidth, boardHeight) {
    canvas = document.createElement('canvas');
    canvas.id = 'mainCanvas';
    document.getElementsByTagName('body')[0].appendChild(canvas);
    canvas.width = boardWidth;
    canvas.height = boardHeight;
    ctx = canvas.getContext('2d')

    secondCanvas = document.createElement('canvas');
    secondCanvas.hidden = true
    document.getElementsByTagName('body')[0].appendChild(secondCanvas);
    secondCanvas.width = boardWidth;
    secondCanvas.height = boardHeight;
    secondCTX = secondCanvas.getContext('2d')


}

export function drawGame(ctx, boardRows, boardColumns, boardHeight, boardWidth, board) {


    drawBoardGrid(ctx, boardRows, boardColumns, boardHeight, boardWidth);
    drawBoardCells(ctx, boardRows, boardColumns, boardHeight, boardWidth, board);
}

export function drawBoardGrid(ctx, boardRows, boardColumns, boardHeight, boardWidth) {
    if (firstTime) {
        firstTime = false
        drawGrid(ctx, boardWidth, boardHeight, boardColumns, boardRows);

        drawGrid(secondCTX, boardWidth, boardHeight, boardColumns, boardRows)
    }
    else {
ctx.clearRect(0, 0, boardWidth, boardHeight);
        ctx.drawImage(secondCanvas, 0, 0);
    }
}

function drawGrid(ctx, boardWidth, boardHeight, boardColumns, boardRows) {
   
    ctx.rect(0, 0, boardWidth, boardHeight);
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.lineWidth = 0.5;
    const cellWidth = getCellWidth(boardWidth, boardColumns);
    const cellHeight = getCellHeight(boardHeight, boardRows);
    for (var i = 1; i < boardColumns; i++) {
        ctx.moveTo(cellWidth * i, 0);
        ctx.lineTo(cellWidth * i, boardHeight);
        ctx.stroke();
    }
    for (var i = 1; i < boardRows; i++) {
        ctx.moveTo(0, cellHeight * i);
        ctx.lineTo(boardWidth, cellHeight * i);
        ctx.stroke();
    }
}

function getCellHeight(boardHeight, boardRows) {
    return boardHeight / boardRows;
}

function getCellWidth(boardWidth, boardColumns) {
    return boardWidth / boardColumns;
}

export function drawBoardCells(ctx, boardRows, boardColumns, boardHeight, boardWidth, board) {
    const cellWidth = getCellWidth(boardWidth, boardColumns)
    const cellHeight = getCellHeight(boardHeight, boardRows)

    for (var col = 0; col < boardColumns; col++)
        for (var row = 0; row < boardRows; row++)
            if (getCellValue(board, { col: col, row: row }) != 0)
                drawCell(ctx, cellWidth, cellHeight, col, row)
    drawCell(ctx, cellWidth, cellHeight, col, row)
}

function drawCell(ctx, cellWidth, cellHeight, columnIndex, rowIndex) {

    ctx.fillRect(cellWidth * columnIndex, cellHeight * rowIndex,
        cellWidth, cellHeight)
}


