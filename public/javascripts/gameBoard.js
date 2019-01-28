import { copyBoard } from "./board.js"

var board

export function setBoard(newBoard) {
    board = newBoard
}

export function updateBoard(fromBoard) {
    copyBoard(fromBoard, board)
}

export function getBoard() {
    return board
}

export function getBoardCurrentInterval(){
    return board.item.currentInterval
}