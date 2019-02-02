import {
    canItemBePlacedOnBoard,
    getNewBoard, getBoardWithItem, isAllowedToMove, getBoardAfterMovingItem, getBoardAfterItemCWRotation,
    getBoardAfterItemCCWRotation, isAllowedToRotateCW, isAllowedToRotateCCW
} from "./board.js"
import { redraw, setBoardDimensions, drawBoard } from "./boardDrawer.js"
import { getBoardCurrentInterval, setBoard, updateBoard, getBoard } from "./gameBoard.js"
import { getNewItem } from "./item.js"


var nextTimedEvent, startCol, runMode, getNextItem

function updateBoardAndRedraw(fromBoard) {
    updateBoard(fromBoard)
    redraw(getBoard())
}

export function keyWasPressed(e) {
    switch (e.key) {
        case 'j':
            if (isAllowedToMove(getBoard(), { col: -1, row: 0 }))
                updateBoardAndRedraw(getBoardAfterMovingItem(getBoard(), { col: -1, row: 0 }))
            break
        case 'l':
            if (isAllowedToMove(getBoard(), { col: +1, row: 0 }))
                updateBoardAndRedraw(getBoardAfterMovingItem(getBoard(), { col: +1, row: 0 }))
            break
        case 'k':
            if (isAllowedToRotateCW(getBoard()))
                updateBoardAndRedraw(getBoardAfterItemCWRotation(getBoard()))
            break
        case 'i':
            if (isAllowedToRotateCCW(getBoard()))
                updateBoardAndRedraw(getBoardAfterItemCCWRotation(getBoard()))
            break
        case 'm':
            while (isAllowedToMove(getBoard(), { col: 0, row: +1 }))
                updateBoardAndRedraw(getBoardAfterMovingItem(getBoard(), { col: 0, row: +1 }))
            break
        case 'z':
            if (isAllowedToMove(getBoard(), { col: 0, row: +1 }))
                updateBoardAndRedraw(getBoardAfterMovingItem(getBoard(), { col: 0, row: +1 }))
            break
        case 'x':
            if (e.nextTestItem != null)
                addNewItem(getNewItem(e.nextTestItem, 300))
    }
}

export function tetris(document, myBoardConfig, myStartCol, myGetNextItem, myRunMode) {
    runMode = myRunMode
    startCol = myStartCol
    getNextItem = myGetNextItem

    setBoardDimensions(myBoardConfig.boardWidth, myBoardConfig.boardHeight)

    setBoard(getNewBoard(myBoardConfig.boardColumns, myBoardConfig.boardRows))
    drawBoard(myBoardConfig.boardRows, myBoardConfig.boardColumns, getBoard())
    window.onkeypress = keyWasPressed
    
    if (runMode === "prod") {
        addNewItem(getNextItem());
        nextTimedEvent = setTimeout(moveDownOneAfterInterval, getBoardCurrentInterval())
    }
}

function addNewItem(newItem) {
    if (canItemBePlacedOnBoard(getBoard(), newItem, { col: startCol, row: 0 }))
        updateBoardAndRedraw(getBoardWithItem(getBoard(), newItem, { col: startCol, row: 0 }))
    else
        alert("game over.")
}

export function moveDownOneAfterInterval() {
    if (isAllowedToMove(getBoard(), { col: 0, row: 1 })) {
        updateBoardAndRedraw(getBoardAfterMovingItem(getBoard(), { col: 0, row: 1 }))
    }
    else {
        addNewItem(getNextItem())
    }
    nextTimedEvent = setTimeout(moveDownOneAfterInterval, getBoardCurrentInterval())
}