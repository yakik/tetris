export function canItemBePlacedOnBoard(board, itemCoordinates) {
    if (!isItemCoordinatesWithinBoardLimits(board, itemCoordinates))
        return false
    else
        return isItemCoordinatesVacant(board, itemCoordinates);

}

function isItemCoordinatesWithinBoardLimits(board, itemCoordinates) {
    var returnValue = true;
    itemCoordinates.forEach(coordinate => {
        if (coordinate.column < 0 || coordinate.row < 0 ||
            coordinate.column >= board.columns || coordinate.row >= board.rows)
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
    var newBoard = getNewBoard(board.columns, board.rows)

    for (var i = 0; i < newBoard.columns; i++)
        for (var j = 0; j < newBoard.rows; j++)
            setCellValue(newBoard, { column: i, row: j }, getCellValue(board, { column: i, row: j }))
    return newBoard;
}

export function getNewBoard(columns, rows) {

    var board = {}
    board.columns = columns
    board.rows = rows
    board.grid = new Array(columns);
    for (var i = 0; i < columns; i++)
        board.grid[i] = new Array(rows);
    for (var i = 0; i < columns; i++)
        for (var j = 0; j < rows; j++)
            setCellValue(board, { column: i, row: j }, 0)
    return board
}

export function getCellValue(board, coordinate) {
    return board.grid[coordinate.column][coordinate.row]
}

export function setCellValue(board, coordinate, value) {
    board.grid[coordinate.column][coordinate.row] = value
}