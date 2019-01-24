import { getNewBoard, getBoardWithItem, canItemBePlacedOnBoard, getBoardAfterItemRemoved } from "./board.js"
import { drawGame, drawBoardGrid, drawBoardCells } from "./boardDrawer.js"
import { getNewItem, getCoordinatesWithOffset } from "./item.js"

const boardRows = 20
const boardColumns = 16
const boardWidth = 400
const boardHeight = 500


var canvas = document.createElement("canvas");
document.getElementsByTagName('body')[0].appendChild(canvas);
setCanvasSize(canvas, boardWidth, boardHeight);
var ctx = canvas.getContext('2d')

var squareItem = getNewItem('Square')
var board = getNewBoard(boardRows, boardColumns);
var itemLocationOnBoard = { x: 5, y: 0 };
board = getBoardWithItem(board, getCoordinatesWithOffset(squareItem, itemLocationOnBoard), squareItem.key)

var nextTimedEvent

export function tetris(document) {
    drawGame(ctx, boardRows, boardColumns, boardHeight, boardWidth, board);
    window.onkeypress = keyWasPressed
    nextTimedEvent =  setTimeout(moveDownOneAfterInterval, 500)
}

function keyWasPressed(e) {
    if (String.fromCharCode(e.keyCode) == 'j') {
        board = getBoardAfterItemRemoved(board, getCoordinatesWithOffset(squareItem, itemLocationOnBoard))
        itemLocationOnBoard.x -= 1
        if (canItemBePlacedOnBoard(board, getCoordinatesWithOffset(squareItem, itemLocationOnBoard))) {
            board = getBoardWithItem(board, getCoordinatesWithOffset(squareItem, itemLocationOnBoard), squareItem.key)
            redraw()
        }
        else
        itemLocationOnBoard.x += 1
    }
    if (String.fromCharCode(e.keyCode) == 'k') {
        board = getBoardAfterItemRemoved(board, getCoordinatesWithOffset(squareItem, itemLocationOnBoard))
        itemLocationOnBoard.x+= 1
        if (canItemBePlacedOnBoard(board, getCoordinatesWithOffset(squareItem, itemLocationOnBoard))) {
            board = getBoardWithItem(board, getCoordinatesWithOffset(squareItem, itemLocationOnBoard), squareItem.key)
            redraw()
        }
        else
        itemLocationOnBoard.x -= 1
    }
   
}

function moveDownOneAfterInterval() {
    board = getBoardAfterItemRemoved(board, getCoordinatesWithOffset(squareItem, itemLocationOnBoard))
    itemLocationOnBoard.y += 1
    board = getBoardWithItem(board, getCoordinatesWithOffset(squareItem, itemLocationOnBoard), squareItem.key)
    redraw()
    nextTimedEvent = setTimeout(moveDownOneAfterInterval,500)
}

function redraw() {
    drawGame(ctx, boardRows, boardColumns, boardHeight, boardWidth, board)
}


function setCanvasSize(canvas, boardWidth, boardHeight) {
    canvas.width = boardWidth;
    canvas.height = boardHeight;
}

