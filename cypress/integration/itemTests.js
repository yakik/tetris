import { setCellValue,getNewBoard, getCellValue, getBoardWithItem, canItemBePlacedOnBoard, getBoardAfterItemRemoved } from "../../public/javascripts/board"
import { getNewItem,getCoordinatesWithOffset } from "../../public/javascripts/item"



describe('board tests', function () {
    it('knows to reflect item on board', function() {
      var squareItem = getNewItem('Square')
  
      var board = getNewBoard(3,3);
      var itemLocationOnBoard = { column: 0, row: 0 };
      
      var newBoard = getBoardWithItem(board, getCoordinatesWithOffset(squareItem, itemLocationOnBoard),squareItem.key)
      
      expect(getCellValue(newBoard,{column:0,row:0})).to.eq(1)
      expect(getCellValue(newBoard,{column:1,row:0})).to.eq(1)
      expect(getCellValue(newBoard,{column:0,row:1})).to.eq(1)
      expect(getCellValue(newBoard,{column:1,row:1})).to.eq(1)
      expect(getCellValue(newBoard,{column:2,row:0})).to.eq(0)
      expect(getCellValue(newBoard,{column:2,row:1})).to.eq(0)
      expect(getCellValue(newBoard,{column:2,row:2})).to.eq(0)
      expect(getCellValue(newBoard,{column:0,row:2})).to.eq(0)
      expect(getCellValue(newBoard,{column:1,row:2})).to.eq(0)
    })
  
    it('knows to remove item from board', function() {
      var squareItem = getNewItem('Square')
  
      var board = getNewBoard(3,3);
      var itemLocationOnBoard = {column: 0, row: 0 };
      
      var newBoard = getBoardWithItem(board, getCoordinatesWithOffset(squareItem, itemLocationOnBoard),squareItem.key)
      
      expect(getCellValue(newBoard, { column: 0, row: 0 })).to.eq(1)

      var newerBoard = getBoardAfterItemRemoved(board, getCoordinatesWithOffset(squareItem, itemLocationOnBoard),squareItem.key)
      expect(getCellValue(newerBoard,{column:0,row:0})).to.eq(0)
      expect(getCellValue(newerBoard,{column:1,row:0})).to.eq(0)
      expect(getCellValue(newerBoard,{column:0,row:1})).to.eq(0)
      expect(getCellValue(newerBoard,{column:1,row:1})).to.eq(0)
      expect(getCellValue(newerBoard,{column:2,row:0})).to.eq(0)
      expect(getCellValue(newerBoard,{column:2,row:1})).to.eq(0)
      expect(getCellValue(newerBoard,{column:2,row:2})).to.eq(0)
      expect(getCellValue(newerBoard,{column:0,row:2})).to.eq(0)
      expect(getCellValue(newerBoard,{column:1,row:2})).to.eq(0)
      
    })
  
    it('knows to check whether item can be placed on board (can)', function() {
      var squareItem = getNewItem('Square')
  
      var board = getNewBoard(3,3)
      var itemLocationOnBoard = { column: 0, row: 0 }
      
      debugger
      expect(canItemBePlacedOnBoard(board,getCoordinatesWithOffset(squareItem, itemLocationOnBoard))).to.be.true
    })
  
    it('knows to check whether item can be placed on board (cannot due to obstruction)', function() {
      var squareItem = getNewItem('Square')
      var board = getNewBoard(3,3)
      var itemLocationOnBoard = { column: 0, row: 0 }
      setCellValue(board,{ column: 1, row: 1 },1)
      
      expect(canItemBePlacedOnBoard(board,getCoordinatesWithOffset(squareItem, itemLocationOnBoard))).to.be.false
    })
  
    
  
    it('checks whether item in board limit (big x)', function() {
      var squareItem = getNewItem('Square')
  
      var board = getNewBoard(3,3)
      var itemLocationOnBoard = { column: 2, row: 0 }
      
      expect(canItemBePlacedOnBoard(board,getCoordinatesWithOffset(squareItem, itemLocationOnBoard))).to.be.false
    })
  
    it('checks whether item in board limit (small x)', function() {
      var squareItem = getNewItem('Square')
  
      var board = getNewBoard(3,3)
      var itemLocationOnBoard = { column: -1, row: 0 }
      
      expect(canItemBePlacedOnBoard(board,getCoordinatesWithOffset(squareItem, itemLocationOnBoard))).to.be.false
    })
  
    it('checks whether item in board limit (small y', function() {
      var squareItem = getNewItem('Square')
  
      var board = getNewBoard(3,3)
      var itemLocationOnBoard = { column: 0, row: -1 }
      
      expect(canItemBePlacedOnBoard(board,getCoordinatesWithOffset(squareItem, itemLocationOnBoard))).to.be.false
    })
  
    it('checks whether item in board limit (big y)', function() {
      var squareItem = getNewItem('Square')
  
      var board = getNewBoard(3,3)
      var itemLocationOnBoard = { column: 0, row: 2 }
      
      expect(canItemBePlacedOnBoard(board,getCoordinatesWithOffset(squareItem, itemLocationOnBoard))).to.be.false
    })
  
  })




