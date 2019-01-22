import { getNewBoard, getBoardWithItem, canItemBePlacedOnBoard } from "../../public/javascripts/board"
import { getNewItem,getCoordinatesWithOffset } from "../../public/javascripts/item"

getNewItem

describe('board tests', function () {
    it('knows to reflect item on board', function() {
      var squareItem = getNewItem('Square')
  
      var board = getNewBoard(3,3);
      var itemLocationOnBoard = { x: 0, y: 0 };
      
      var newBoard = getBoardWithItem(board, getCoordinatesWithOffset(squareItem, itemLocationOnBoard),squareItem.key)
      
      expect(newBoard[0][0]).to.eq(1)
      expect(newBoard[1][0]).to.eq(1)
      expect(newBoard[0][1]).to.eq(1)
      expect(newBoard[1][1]).to.eq(1)
      expect(newBoard[2][0]).to.eq(0)
      expect(newBoard[2][1]).to.eq(0)
      expect(newBoard[2][2]).to.eq(0)
      expect(newBoard[0][2]).to.eq(0)
      expect(newBoard[1][2]).to.eq(0)
    })
  
    it('knows to check whether item can be placed on board (can)', function() {
      var squareItem = getNewItem('Square')
  
      var board = getNewBoard(3,3)
      var itemLocationOnBoard = { x: 0, y: 0 }
      
      
      expect(canItemBePlacedOnBoard(board,getCoordinatesWithOffset(squareItem, itemLocationOnBoard))).to.be.true
    })
  
    it('knows to check whether item can be placed on board (cannot due to obstruction)', function() {
      var squareItem = getNewItem('Square')
  
      var board = getNewBoard(3,3)
      var itemLocationOnBoard = { x: 0, y: 0 }
      board[1][1] = 1
      
      expect(canItemBePlacedOnBoard(board,getCoordinatesWithOffset(squareItem, itemLocationOnBoard))).to.be.false
    })
  
    it('checks whether item in board limit (big x)', function() {
      var squareItem = getNewItem('Square')
  
      var board = getNewBoard(3,3)
      var itemLocationOnBoard = { x: 2, y: 0 }
      debugger
      expect(canItemBePlacedOnBoard(board,getCoordinatesWithOffset(squareItem, itemLocationOnBoard))).to.be.false
    })
  
    it('checks whether item in board limit (small x)', function() {
      var squareItem = getNewItem('Square')
  
      var board = getNewBoard(3,3)
      var itemLocationOnBoard = { x: -1, y: 0 }
      debugger
      expect(canItemBePlacedOnBoard(board,getCoordinatesWithOffset(squareItem, itemLocationOnBoard))).to.be.false
    })
  
    it('checks whether item in board limit (small y', function() {
      var squareItem = getNewItem('Square')
  
      var board = getNewBoard(3,3)
      var itemLocationOnBoard = { x: 0, y: -1 }
      debugger
      expect(canItemBePlacedOnBoard(board,getCoordinatesWithOffset(squareItem, itemLocationOnBoard))).to.be.false
    })
  
    it('checks whether item in board limit (big x)', function() {
      var squareItem = getNewItem('Square')
  
      var board = getNewBoard(3,3)
      var itemLocationOnBoard = { x: 0, y: 2 }
      debugger
      expect(canItemBePlacedOnBoard(board,getCoordinatesWithOffset(squareItem, itemLocationOnBoard))).to.be.false
    })
  
  })




