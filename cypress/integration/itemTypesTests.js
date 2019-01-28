import { getBoardAfterMovingItem, isAllowedToMove, setCellValue, getNewBoard, getCellValue, getBoardWithItem, canItemBePlacedOnBoard, getBoardAfterItemRemoved } from "../../public/javascripts/board"
import { getNewItem } from "../../public/javascripts/item"
import { areEqual } from "./compareArrays.js";

describe('board tests', function () {
    it('Square', function () {
        var item = getNewItem('Square')

        var board = getNewBoard(4, 4);
        var itemLocationOnBoard = { col: 0, row: 0 };

        var newBoard = getBoardWithItem(board, item, itemLocationOnBoard)

        expect(areEqual(newBoard.grid, ([
            [1, 1, 0, 0],
            [1, 1, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ]))).is.true
    })

    it('Line', function () {
        var item = getNewItem('Line')

        var board = getNewBoard(4, 4);
        var itemLocationOnBoard = { col: 0, row: 0 };

        var newBoard = getBoardWithItem(board, item, itemLocationOnBoard)

        expect(areEqual(newBoard.grid, ([
            [2, 0, 0, 0],
            [2, 0, 0, 0],
            [2, 0, 0, 0],
            [2, 0, 0, 0]
        ]))).is.true
    })

    it('Plus', function () {
        var item = getNewItem('Plus')

        var board = getNewBoard(4, 4);
        var itemLocationOnBoard = { col: 0, row: 0 };

        var newBoard = getBoardWithItem(board, item, itemLocationOnBoard)

        expect(areEqual(newBoard.grid, ([
            [0, 3, 0, 0],
            [3, 3, 0, 0],
            [0, 3, 0, 0],
            [0, 0, 0, 0]
        ]))).is.true
    })

    it('LeftL', function () {
        var item = getNewItem('LeftL')

        var board = getNewBoard(4, 4);
        var itemLocationOnBoard = { col: 0, row: 0 };

        var newBoard = getBoardWithItem(board, item, itemLocationOnBoard)

        expect(areEqual(newBoard.grid, ([
            [4, 4, 0, 0],
            [0, 4, 0, 0],
            [0, 4, 0, 0],
            [0, 0, 0, 0]
        ]))).is.true
    })

    it('RightL', function () {
        var item = getNewItem('RightL')

        var board = getNewBoard(4, 4);
        var itemLocationOnBoard = { col: 0, row: 0 };

        var newBoard = getBoardWithItem(board, item, itemLocationOnBoard)

        expect(areEqual(newBoard.grid, ([
            [0, 5, 0, 0],
            [0, 5, 0, 0],
            [5, 5, 0, 0],
            [0, 0, 0, 0]
        ]))).is.true
    })

    it('LeftStep', function () {
        var item = getNewItem('LeftStep')

        var board = getNewBoard(4, 4);
        var itemLocationOnBoard = { col: 0, row: 0 };

        var newBoard = getBoardWithItem(board, item, itemLocationOnBoard)

        expect(areEqual(newBoard.grid, ([
            [6, 0, 0, 0],
            [6, 6, 0, 0],
            [0, 6, 0, 0],
            [0, 0, 0, 0]
        ]))).is.true
    })

    it('RightStep', function () {
        
        var item = getNewItem('RightStep')

        var board = getNewBoard(4, 4);
        var itemLocationOnBoard = { col: 0, row: 0 };

        var newBoard = getBoardWithItem(board, item, itemLocationOnBoard)

        expect(areEqual(newBoard.grid, ([
            [0, 7, 0, 0],
            [7, 7, 0, 0],
            [7, 0, 0, 0],
            [0, 0, 0, 0]
        ]))).is.true
    })
})