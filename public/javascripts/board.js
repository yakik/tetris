export function canItemBePlacedOnBoard(board,itemCoordinates) {
    if (!isItemCoordinatesWithinBoardLimits(board,itemCoordinates))
        return false
    else
        return isItemCoordinatesVacant(board,itemCoordinates);

}

function isItemCoordinatesWithinBoardLimits(board,itemCoordinates) {
    var returnValue = true;
    itemCoordinates.forEach(coordinate => {
        if (coordinate.x < 0 || coordinate.y < 0 ||
            coordinate.x >= board.length || coordinate.y >= board[0].length)
            returnValue = false;
    });
    return returnValue;
}


function isItemCoordinatesVacant(board,itemCoordinates) {
    var returnValue = true;
    itemCoordinates.forEach(coordinate => {
        if (board[coordinate.x][coordinate.y] != 0)
            returnValue = false;
    });
    return returnValue;
}

export function getBoardWithItem(board,itemCoordinates, itemKey) {
    var newBoard = duplicateBoard(board);

    itemCoordinates.forEach(coordinate => {
        newBoard[coordinate.x][coordinate.y] = itemKey
    });
    return newBoard
}

function duplicateBoard(board) {
    var newBoard = new Array(board.length);
    for (var i = 0; i < newBoard.length; i++)
        newBoard[i] = board[i].slice();
    return newBoard;
}

export function getNewBoard(width, height) {
    var board = new Array(width);
    for (var i = 0; i < width; i++)
        board[i] = new Array(height);
    for (var i = 0; i < width; i++)
        for (var j = 0; j < height; j++)
            board[i][j] = 0;
    return board
}