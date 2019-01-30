import { getNewBoard, getBoardWithItem, isAllowedToMove, getBoardAfterMovingItem, copyBoard } from "./board.js"
import { setCanvas, redraw } from "./boardDrawer.js"
import {getBoardCurrentInterval , setBoard, updateBoard , getBoard} from "./gameBoard.js"

var  getNextItem, nextTimedEvent, startCol

function updateBoardAndRedraw(fromBoard) {
    updateBoard(fromBoard)
    redraw(getBoard())
}

export function tetris(document, myBoardConfig, myStartCol, myGetNextItem) {
    getNextItem = myGetNextItem
    startCol = myStartCol
    setCanvas(myBoardConfig.boardWidth, myBoardConfig.boardHeight)
    
    setBoard(getNewBoard(myBoardConfig.boardColumns, myBoardConfig.boardRows))
    updateBoardAndRedraw(getBoardWithItem(getBoard(), getNextItem(), { col: startCol, row: 0 }))

    window.onkeypress = keyWasPressed
    nextTimedEvent = setTimeout(moveDownOneAfterInterval, getBoardCurrentInterval())
    document.addEventListener("click", mouseclicked)
}

function mouseclicked(event) {
    if (event.clientX < 200) {
        if (isAllowedToMove(getBoard(), { col: -1, row: 0 })) {
            updateBoardAndRedraw(getBoardAfterMovingItem(getBoard(), { col: -1, row: 0 }))
        }
    }
    else {
        if (isAllowedToMove(getBoard(), { col: +1, row: 0 })) {
            updateBoardAndRedraw(getBoardAfterMovingItem(getBoard(), { col: +1, row: 0 }))
        }
    }
}

export function keyWasPressed(e) {
    if ((e.key) == 'j') {
        if (isAllowedToMove(getBoard(), { col: -1, row: 0 })) {
            updateBoardAndRedraw(getBoardAfterMovingItem(getBoard(), { col: -1, row: 0 }))
        }
    }
    if (e.key == 'l') {
        if (isAllowedToMove(getBoard(), { col: +1, row: 0 })) {
            updateBoardAndRedraw(getBoardAfterMovingItem(getBoard(), { col: +1, row: 0 }))
        }
    }
    if (e.key == 'm') {
        while (isAllowedToMove(getBoard(), { col: 0, row: +1 })) {
            updateBoardAndRedraw(getBoardAfterMovingItem(getBoard(), { col: 0, row: +1 }))
        }
    }
    
}

export function moveDownOneAfterInterval() {
    if (isAllowedToMove(getBoard(), { col: 0, row: 1 })) {
        updateBoardAndRedraw(getBoardAfterMovingItem(getBoard(), { col: 0, row: 1 }))
    }
    else {
        updateBoardAndRedraw(getBoardWithItem(getBoard(), getNextItem(), { col: startCol, row: 0 }))
    }
    nextTimedEvent = setTimeout(moveDownOneAfterInterval, getBoardCurrentInterval())
}



