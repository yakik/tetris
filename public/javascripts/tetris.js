import { getNewBoard, getBoardWithItem, isAllowedToMove, moveItemOnBoard } from "./board.js"
import { drawGame } from "./boardDrawer.js"
import { getNewItem } from "./item.js"

const boardRows = 20
const boardColumns = 16
const boardWidth = 400
const boardHeight = 500


var canvas = document.createElement("canvas");
document.getElementsByTagName('body')[0].appendChild(canvas);
setCanvasSize(canvas, boardWidth, boardHeight);
var ctx = canvas.getContext('2d')

var squareItem = getNewItem('Square')
var board = getNewBoard(boardColumns, boardRows);
board = getBoardWithItem(board, squareItem, { col: 5, row: 0 })

var nextTimedEvent

drawGame(ctx, boardRows, boardColumns, boardHeight, boardWidth, board)

export function tetris(document) {
    
    window.onkeypress = keyWasPressed
    nextTimedEvent = setTimeout(moveDownOneAfterInterval, 500)
    document.addEventListener("click", printMousePos)
}

function printMousePos(event) {
    if (event.clientX<200) {
        if (isAllowedToMove(board, { col: -1, row: 0 })) {
            board = moveItemOnBoard(board, { col: -1, row: 0 })
            redraw()
        }
    }
    else {
        if (isAllowedToMove(board, { col: +1, row: 0 })) {
            board = moveItemOnBoard(board, { col: +1, row: 0 })
            redraw()
        }
    }
   
    /* alert(
      "clientX: " + event.clientX +
      " - clientY: " + event.clientY)*/
  }

export function keyWasPressed(e) {
    if (String.fromCharCode(e.keyCode) == 'j') {
        if (isAllowedToMove(board, { col: -1, row: 0 })) {
            board = moveItemOnBoard(board, { col: -1, row: 0 })
            redraw()
        }
    }
    if (String.fromCharCode(e.keyCode) == 'k') {
        if (isAllowedToMove(board, { col: +1, row: 0 })) {
            board = moveItemOnBoard(board, { col: +1, row: 0 })
            redraw()
        }
    }

}

function moveDownOneAfterInterval() {
    if (isAllowedToMove(board, { col: 0, row: 1 })) {
        board = moveItemOnBoard(board, { col: 0, row: 1 })
        redraw()

    }
    else
        board = getBoardWithItem(board, squareItem, { col: 5, row: 0 })
    nextTimedEvent = setTimeout(moveDownOneAfterInterval, 500)
}

function redraw() {
    drawGame(ctx, boardRows, boardColumns, boardHeight, boardWidth, board)
}


function setCanvasSize(canvas, boardWidth, boardHeight) {
    canvas.width = boardWidth;
    canvas.height = boardHeight;
}

