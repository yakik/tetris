import {
  getBoardAfterMovingItem, isAllowedToMove, setCellValue, getNewBoard, getFirstCompleteRowFromBottom,
  getCellValue, getBoardWithItem, canItemBePlacedOnBoard, isAllowedToRotateCW, isAllowedToRotateCCW
} from "../../public/javascripts/board"
import { getNewItem } from "../../public/javascripts/item"

describe('board tests', function () {
    it('knows to reflect item on board', function() {
      var squareItem = getNewItem('Square')
  
      var board = getNewBoard(3,3);
      var itemLocationOnBoard = { col: 0, row: 0 };
      
      var newBoard = getBoardWithItem(board, squareItem, itemLocationOnBoard)
      
      expect(getCellValue(newBoard,{col:0,row:0})).to.eq(1)
      expect(getCellValue(newBoard,{col:1,row:0})).to.eq(1)
      expect(getCellValue(newBoard,{col:0,row:1})).to.eq(1)
      expect(getCellValue(newBoard,{col:1,row:1})).to.eq(1)
      expect(getCellValue(newBoard,{col:2,row:0})).to.eq(0)
      expect(getCellValue(newBoard,{col:2,row:1})).to.eq(0)
      expect(getCellValue(newBoard,{col:2,row:2})).to.eq(0)
      expect(getCellValue(newBoard,{col:0,row:2})).to.eq(0)
      expect(getCellValue(newBoard,{col:1,row:2})).to.eq(0)
    })
  
    it('Moves an item', function() {
      var squareItem = getNewItem('Square')
      var board = getNewBoard(3,3)
      var newBoard = getBoardWithItem(board, squareItem, { col: 0, row: 0 })
      newBoard = getBoardAfterMovingItem(newBoard, { col: 1, row: 1 })
      expect(getCellValue(newBoard,{col:0,row:0})).to.eq(0)
      expect(getCellValue(newBoard,{col:1,row:0})).to.eq(0)
      expect(getCellValue(newBoard,{col:0,row:1})).to.eq(0)
      expect(getCellValue(newBoard,{col:1,row:1})).to.eq(1)
      expect(getCellValue(newBoard,{col:2,row:0})).to.eq(0)
      expect(getCellValue(newBoard,{col:2,row:1})).to.eq(1)
      expect(getCellValue(newBoard,{col:2,row:2})).to.eq(1)
      expect(getCellValue(newBoard,{col:0,row:2})).to.eq(0)
      expect(getCellValue(newBoard,{col:1,row:2})).to.eq(1)
    })
  
  
    it('allows to rotate item when possible', function() {
      var item = getNewItem('LeftL')
      var board = getNewBoard(3,3)
      var newBoard = getBoardWithItem(board, item, { col: 0, row: 0 })
      
      expect(isAllowedToRotateCW(newBoard)).to.be.true
      
      expect(isAllowedToRotateCCW(newBoard)).to.be.true
      
    })
  
    it('doesnt allow to rotate item when impossible', function() {
      var item = getNewItem('LeftL')
      var board = getNewBoard(3,3)
      var newBoard = getBoardWithItem(board, item, { col: 0, row: 0 })
      setCellValue(newBoard,{col:1,row:0},1)
      
      expect(isAllowedToRotateCW(newBoard)).to.be.false
      expect(isAllowedToRotateCCW(newBoard)).to.be.false
      
    })
  
    it('identifies a complete row', function() {
      var board = getNewBoard(3,3)
      setCellValue(board, { col: 0, row: 1 }, 1)
      setCellValue(board, { col: 1, row: 1 }, 1)
      setCellValue(board, { col: 2, row: 1 }, 1)
      setCellValue(board, { col: 0, row: 0 }, 1)
      setCellValue(board, { col: 1, row: 0 }, 1)
      setCellValue(board, { col: 2, row: 0 }, 1)
      
      expect(getFirstCompleteRowFromBottom(board)).to.eq(1)
    })
  
    it('identifies no complete row', function() {
      var board = getNewBoard(3,3)
      expect(getFirstCompleteRowFromBottom(board)).to.eq(-1)
    })
  
    it('allows to move item when possible', function() {
      var squareItem = getNewItem('Square')
      var board = getNewBoard(3,3)
      var newBoard = getBoardWithItem(board, squareItem, { col: 0, row: 0 })
      
      expect(isAllowedToMove(newBoard, { col: 1, row: 0 })).to.be.true
      
    })
  
    it('doesnt allow to move left when impossible', function() {
      var squareItem = getNewItem('Square')
      var board = getNewBoard(3,3)
      var newBoard = getBoardWithItem(board, squareItem, { col: 0, row: 0 })
      
      expect(isAllowedToMove(newBoard, { col: -1, row: 0 })).to.be.false
      
    })
  
    it('doesnt allow to move right when impossible', function() {
      var squareItem = getNewItem('Square')
      var board = getNewBoard(3,3)
      var newBoard = getBoardWithItem(board, squareItem, { col: 0, row: 0 })
      expect(isAllowedToMove(newBoard, { col: +1, row: 0 })).to.be.true
   
      expect(isAllowedToMove(newBoard, { col: +2, row: 0 })).to.be.false
      
    })
  
    it('doesnt allow to move up when impossible', function() {
      var squareItem = getNewItem('Square')
      var board = getNewBoard(3,3)
      var newBoard = getBoardWithItem(board, squareItem, { col: 0, row: 0 })
      
      expect(isAllowedToMove(newBoard, { col: +0, row: -1 })).to.be.false
      
    })
  
    it('doesnt allow to move down when impossible', function() {
      var squareItem = getNewItem('Square')
      var board = getNewBoard(3,3)
      var newBoard = getBoardWithItem(board, squareItem, { col: 0, row: 0 })
      expect(isAllowedToMove(newBoard, { col: +0, row: +1 })).to.be.true
     
      expect(isAllowedToMove(newBoard, { col: +0, row: +2 })).to.be.false
      
    })
  
    it('knows to check whether item can be placed on board (can)', function() {
      var squareItem = getNewItem('Square')
  
      var board = getNewBoard(3,3)
      var itemLocationOnBoard = { col: 0, row: 0 }
      
      
      expect(canItemBePlacedOnBoard(board,squareItem, itemLocationOnBoard)).to.be.true
    })
  
    it('knows to check whether item can be placed on board (cannot due to obstruction)', function() {
      var squareItem = getNewItem('Square')
      var board = getNewBoard(3,3)
      var itemLocationOnBoard = { col: 0, row: 0 }
      setCellValue(board,{ col: 1, row: 1 },1)
      
      expect(canItemBePlacedOnBoard(board,squareItem, itemLocationOnBoard)).to.be.false
    })
  
    it('checks whether item in board limit (big x)', function() {
      var squareItem = getNewItem('Square')
      var board = getNewBoard(3,3)
      var itemLocationOnBoard = { col: 2, row: 0 }
      
      expect(canItemBePlacedOnBoard(board,squareItem, itemLocationOnBoard)).to.be.false
    })
  
    it('checks whether item in board limit (small x)', function() {
      var squareItem = getNewItem('Square')
      var board = getNewBoard(3,3)
      var itemLocationOnBoard = { col: -1, row: 0 }
      
      expect(canItemBePlacedOnBoard(board,squareItem, itemLocationOnBoard)).to.be.false
    })
  
    it('checks whether item in board limit (small y', function() {
      var squareItem = getNewItem('Square')
      var board = getNewBoard(3,3)
      var itemLocationOnBoard = { col: 0, row: -1 }
      
      expect(canItemBePlacedOnBoard(board,squareItem, itemLocationOnBoard)).to.be.false
    })
  
    it('checks whether item in board limit (big y)', function() {
      var squareItem = getNewItem('Square')
      var board = getNewBoard(3,3)
      var itemLocationOnBoard = { col: 0, row: 2 }
      
      expect(canItemBePlacedOnBoard(board,squareItem, itemLocationOnBoard)).to.be.false
    })
  
  })




