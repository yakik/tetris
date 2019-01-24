
import { getCoordinatesWithOffset } from "./item.js"

export function canItemBePlacedOnBoard(board, item, itemLocationOnBoard) {
    if (!isItemWithinBoardLimits(board, item, itemLocationOnBoard))
        return false
    else
        return isItemCoordinatesVacant(board, item, itemLocationOnBoard);

}

function isItemWithinBoardLimits(board, item, itemLocationOnBoard) {
    var itemCoordinates = getCoordinatesWithOffset(item, itemLocationOnBoard)

    var returnValue = true;
    itemCoordinates.forEach(coordinate => {
        if (coordinate.col < 0 || coordinate.row < 0 ||
            coordinate.col >= board.cols || coordinate.row >= board.rows)
            returnValue = false;
    });
    return returnValue;
}


function isItemCoordinatesVacant(board, item, itemLocationOnBoard) {
    var itemCoordinates = getCoordinatesWithOffset(item, itemLocationOnBoard)
    var returnValue = true;
    itemCoordinates.forEach(coordinate => {
        if (getCellValue(board, coordinate) != 0)
            returnValue = false;
    });
    return returnValue;
}

export function getBoardWithItem(board, item, itemLocationOnBoard) {
    var itemCoordinates = getCoordinatesWithOffset(item, itemLocationOnBoard)
    var newBoard = duplicateBoard(board);
    newBoard.item = item
    newBoard.itemLocationOnBoard = itemLocationOnBoard
    itemCoordinates.forEach(coordinate => {
        setCellValue(newBoard, coordinate, item.key)
    });
    return newBoard
}


export function moveItemOnBoard(board, offest) {
    var newBoard = removeItemFromBoard(board)
    var itemLocationOnBoard = {}

    itemLocationOnBoard.col = board.itemLocationOnBoard.col + offest.col
    itemLocationOnBoard.row = board.itemLocationOnBoard.row + offest.row
    return getBoardWithItem(newBoard, board.item, itemLocationOnBoard)

}

export function isAllowedToMove(board, offest) {
    var newBoard = removeItemFromBoard(board)
    var itemLocationOnBoard = {}

    itemLocationOnBoard.col = board.itemLocationOnBoard.col + offest.col
    itemLocationOnBoard.row = board.itemLocationOnBoard.row + offest.row
    return canItemBePlacedOnBoard(newBoard, board.item, itemLocationOnBoard)

}

function removeItemFromBoard(board) {
    var itemCoordinates = getCoordinatesWithOffset(board.item, board.itemLocationOnBoard)
    var newBoard = duplicateBoard(board);
    itemCoordinates.forEach(coordinate => {
        setCellValue(newBoard, coordinate, 0)
    });
    return newBoard;
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