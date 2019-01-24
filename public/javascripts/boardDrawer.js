
export function drawGame(ctx, boardRows, boardColumns, boardHeight, boardWidth, board) {

    ctx.clearRect(0, 0, boardWidth, boardHeight);
    drawBoardGrid(ctx, boardRows, boardColumns, boardHeight, boardWidth);
    drawBoardCells(ctx, boardRows, boardColumns, boardHeight, boardWidth, board);
}

export function drawBoardGrid(ctx, boardRows, boardColumns, boardHeight, boardWidth) {
    ctx.rect(0, 0, boardWidth, boardHeight)
    ctx.lineWidth = 1;
    ctx.stroke()

    ctx.lineWidth = 0.5;


    const cellWidth = getCellWidth(boardWidth, boardColumns)
    const cellHeight = getCellHeight(boardHeight, boardRows)

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
    
    board.grid.forEach(function (column, columnIndex) {
        column.forEach(function (cell, rowIndex) {
            if (cell != 0)
                drawCell(ctx, cellWidth, cellHeight, rowIndex, columnIndex)
        })
    })
}

function drawCell(ctx, cellWidth, cellHeight, rowIndex, columnIndex) {

    ctx.fillRect(cellWidth * columnIndex, cellHeight * rowIndex,
        cellWidth , cellHeight)
}


