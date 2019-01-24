export function canItemBePlacedOnBoard(board, itemCoordinates) {
    if (!isItemCoordinatesWithinBoardLimits(board, itemCoordinates))
        return false
    else
        return isItemCoordinatesVacant(board, itemCoordinates);

}

function isItemCoordinatesWithinBoardLimits(board, itemCoordinates) {
    var returnValue = true;
    itemCoordinates.forEach(coordinate => {
        if (coordinate.col < 0 || coordinate.row < 0 ||
            coordinate.col >= board.cols || coordinate.row >= board.rows)
            returnValue = false;
    });
    return returnValue;
}


function isItemCoordinatesVacant(board, itemCoordinates) {
    var returnValue = true;
    itemCoordinates.forEach(coordinate => {
        if (getCellValue(board,coordinate) != 0)
            returnValue = false;
    });
    return returnValue;
}

export function getBoardWithItem(board, itemCoordinates, itemKey) {
    var newBoard = duplicateBoard(board);

    itemCoordinates.forEach(coordinate => {
        setCellValue(newBoard,coordinate,itemKey)
    });
    return newBoard
}


export function getBoardAfterItemRemoved(board, itemCoordinates, itemKey) {
    var newBoard = duplicateBoard(board);

    itemCoordinates.forEach(coordinate => {
        setCellValue(newBoard,coordinate,0)
    })
    return newBoard
}

function duplicateBoard(board) {
    var newBoard = getNewBoard(board.cols, board.rows)

    for (var i = 0; i < newBoard.cols; i++)
        for (var j = 0; j < newBoard.rows; j++)
            setCellValue(newBoard, { col: i, row: j }, getCellValue(board, { col: i, row: j }))
    return newBoard;
}

export function getNewBoard(cols, rows) {

    var board = {}
    board.cols = cols
    board.rows = rows
    board.grid = new Array(cols);
    for (var i = 0; i < cols; i++)
        board.grid[i] = new Array(rows);
    for (var i = 0; i < cols; i++)
        for (var j = 0; j < rows; j++)
            setCellValue(board, { col: i, row: j }, 0)
    return board
}

export function getCellValue(board, coordinate) {
    return board.grid[coordinate.col][coordinate.row]
}

export function setCellValue(board, coordinate, value) {
    board.grid[coordinate.col][coordinate.row] = value
}