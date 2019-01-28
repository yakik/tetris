import { getNewBoard, getBoardWithItem, isAllowedToMove, getBoardAfterMovingItem, copyBoard } from "./board.js"
import { drawGame } from "./boardDrawer.js"

var boardRows, boardColumns, boardWidth, boardHeight
var canvas, ctx, squareItem, board, nextTimedEvent

function setBoard(newBoard) {
    board = newBoard
}

function updateBoard(fromBoard) {
    copyBoard(fromBoard,board)
}

function updateBoardAndRedraw(fromBoard) {
    updateBoard(fromBoard)
    redraw()
}

export function tetris(document, boardConfig, getNextItem) {

    boardRows = boardConfig.boardRows
    boardColumns = boardConfig.boardColumns
    boardWidth = boardConfig.boardWidth
    boardHeight = boardConfig.boardHeight

    canvas = document.createElement("canvas");
    document.getElementsByTagName('body')[0].appendChild(canvas);
    setCanvasSize(canvas, boardWidth, boardHeight);
    ctx = canvas.getContext('2d')

    squareItem = getNextItem()
    board = getNewBoard(boardColumns, boardRows);
    board = getBoardWithItem(board, squareItem, { col: 5, row: 0 })

    drawGame(ctx, boardRows, boardColumns, boardHeight, boardWidth, board)

    window.onkeypress = keyWasPressed
    nextTimedEvent = setTimeout(moveDownOneAfterInterval, 500)
    document.addEventListener("click", printMousePos)
}

function printMousePos(event) {
    if (event.clientX < 200) {
        if (isAllowedToMove(board, { col: -1, row: 0 })) {
            updateBoardAndRedraw(getBoardAfterMovingItem(board, { col: -1, row: 0 }))
        }
    }
    else {
        if (isAllowedToMove(board, { col: +1, row: 0 })) {
            updateBoardAndRedraw(getBoardAfterMovingItem(board, { col: +1, row: 0 }))
        }
    }
}

export function keyWasPressed(e) {
    if (String.fromCharCode(e.keyCode) == 'j') {
        if (isAllowedToMove(board, { col: -1, row: 0 })) {
            updateBoardAndRedraw(getBoardAfterMovingItem(board, { col: -1, row: 0 }))
        }
    }
    if (String.fromCharCode(e.keyCode) == 'k') {
        if (isAllowedToMove(board, { col: +1, row: 0 })) {
            updateBoardAndRedraw(getBoardAfterMovingItem(board, { col: +1, row: 0 }))
        }
    }

}

function moveDownOneAfterInterval() {
    if (isAllowedToMove(board, { col: 0, row: 1 })) {
        updateBoardAndRedraw(getBoardAfterMovingItem(board, { col: 0, row: 1 }))
    }
    else {
        updateBoardAndRedraw(getBoardWithItem(board, squareItem, { col: 5, row: 0 }))
    }
    nextTimedEvent = setTimeout(moveDownOneAfterInterval, 500)
}

function redraw() {
    drawGame(ctx, boardRows, boardColumns, boardHeight, boardWidth, board)
}


function setCanvasSize(canvas, boardWidth, boardHeight) {
    canvas.width = boardWidth;
    canvas.height = boardHeight;
}

