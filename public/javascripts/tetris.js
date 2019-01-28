import { getNewBoard, getBoardWithItem, isAllowedToMove, getBoardAfterMovingItem, copyBoard } from "./board.js"
import { setCanvas, redraw } from "./boardDrawer.js"

var squareItem, board, nextTimedEvent

function setBoard(newBoard) {
    board = newBoard
}

function updateBoard(fromBoard) {
    copyBoard(fromBoard, board)
}

function getBoard() {
    return board
}

function updateBoardAndRedraw(fromBoard) {
    updateBoard(fromBoard)
    redraw(getBoard())
}


export function tetris(document, myBoardConfig, getNextItem) {
    setCanvas(myBoardConfig.boardWidth,myBoardConfig.boardHeight)
    squareItem = getNextItem()
    
    setBoard(getNewBoard(myBoardConfig.boardColumns, myBoardConfig.boardRows))
    updateBoardAndRedraw(getBoardWithItem(board, squareItem, { col: 5, row: 0 }))

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



