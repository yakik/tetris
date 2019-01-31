
import { getDuplicateItem, getCoordinatesWithOffset, getItemCWRotated,getItemCCWRotated } from "./item.js"


export function isAllowedToRotateCW(board){
    var newBoard = getBoardAfterRemovingItem(board)
    var itemLocationOnBoard = {}

    itemLocationOnBoard.col = board.itemLocationOnBoard.col
    itemLocationOnBoard.row = board.itemLocationOnBoard.row

    var item = getItemCWRotated(board.item)

    return canItemBePlacedOnBoard(newBoard, item, itemLocationOnBoard)
}

export function isAllowedToRotateCCW(board){
    var newBoard = getBoardAfterRemovingItem(board)
    var itemLocationOnBoard = {}

    itemLocationOnBoard.col = board.itemLocationOnBoard.col
    itemLocationOnBoard.row = board.itemLocationOnBoard.row

    var item = getItemCCWRotated(board.item)

    return canItemBePlacedOnBoard(newBoard, item, itemLocationOnBoard)
}

export function getBoardAfterItemCWRotation(board) {
        var item = board.item
        var itemLocationOnBoard = board.itemLocationOnBoard
        var newBoard = getBoardAfterRemovingItem(board)
        item = getItemCWRotated(item)
        return getBoardWithItem(newBoard,item,itemLocationOnBoard)
}



export function getBoardAfterItemCCWRotation(board) {
    var item = board.item
    var itemLocationOnBoard = board.itemLocationOnBoard
    var newBoard = getBoardAfterRemovingItem(board)
    item = getItemCCWRotated(item)
    return getBoardWithItem(newBoard,item,itemLocationOnBoard)
}

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
    var newBoard = getDuplicateBoard(board);
    newBoard.item = item
    newBoard.itemLocationOnBoard = itemLocationOnBoard
    itemCoordinates.forEach(coordinate => {
        setCellValue(newBoard, coordinate, item.key)
    });
    return newBoard
}


export function getBoardAfterMovingItem(board, offest) {
    var newBoard = getBoardAfterRemovingItem(board)
    var itemLocationOnBoard = {}

    itemLocationOnBoard.col = board.itemLocationOnBoard.col + offest.col
    itemLocationOnBoard.row = board.itemLocationOnBoard.row + offest.row
    return getBoardWithItem(newBoard, board.item, itemLocationOnBoard)

}

export function isAllowedToMove(board, offest) {
    var itemLocationOnBoard = {}
    var item = getDuplicateItem(board.item)
    itemLocationOnBoard.col = board.itemLocationOnBoard.col + offest.col
    itemLocationOnBoard.row = board.itemLocationOnBoard.row + offest.row
    var newBoard = getBoardAfterRemovingItem(board)
  
    

    
    return canItemBePlacedOnBoard(newBoard, item, itemLocationOnBoard)

}

function getBoardAfterRemovingItem(board) {
    var itemCoordinates = getCoordinatesWithOffset(board.item, board.itemLocationOnBoard)
    var newBoard = getDuplicateBoard(board);
    itemCoordinates.forEach(coordinate => {
        setCellValue(newBoard, coordinate, 0)
    });
    return newBoard;
}


function getDuplicateBoard(board) {
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
    board.grid = new Array(rows);
    for (var i = 0; i < rows; i++)
        board.grid[i] = new Array(cols);
    for (var i = 0; i < cols; i++)
        for (var j = 0; j < rows; j++)
            setCellValue(board, { col: i, row: j }, 0)
    return board
}

export function copyBoard(fromBoard, toBoard) {
    for (var i = 0; i < fromBoard.cols; i++)
        for (var j = 0; j < fromBoard.rows; j++)
            setCellValue(toBoard, { col: i, row: j }, getCellValue(fromBoard,{ col: i, row: j }))
    toBoard.item = fromBoard.item
    toBoard.itemLocationOnBoard = fromBoard.itemLocationOnBoard
}

export function getCellValue(board, coordinate) {
    return board.grid[coordinate.row][coordinate.col]
}

export function setCellValue(board, coordinate, value) {
    board.grid[coordinate.row][coordinate.col] = value
}