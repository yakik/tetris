import { tetris, keyWasPressed, moveDownOneAfterInterval } from "../../public/javascripts/tetris.js"
import { getNewItem } from "../../public/javascripts/item.js"
import { getBoard } from "../../public/javascripts/gameBoard.js"
import { areEqual } from "./compareArrays.js";



describe('e2e tests', function () {
  it('move left, right and get new one', function () {
    
    tetris(document, { boardRows: 4, boardColumns: 6, boardWidth: 400, boardHeight: 500 }, 1,
      () => { return getNewItem('Square', 10000) })
    var a = getBoard().grid
    
    expect(areEqual(getBoard().grid,([
      [0, 1, 1, 0, 0, 0],
      [0, 1, 1, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
    
    ]))).is.true

    var keyPressed = { key: 'j' }

    keyWasPressed(keyPressed)

    expect(areEqual(getBoard().grid,([
      [1, 1, 0, 0, 0, 0],
      [1, 1, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
    ]))).is.true

    var keyPressed = { key: 'j' }

    keyWasPressed(keyPressed)

    expect(areEqual(getBoard().grid,([
      [1, 1, 0, 0, 0, 0],
      [1, 1, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
    ]))).is.true

     keyPressed = { key: 'l' }
    for (var i = 0; i < 10; i++)
      keyWasPressed(keyPressed)

      expect(areEqual(getBoard().grid,([
        [0, 0, 0, 0, 1, 1],
        [0, 0, 0, 0, 1, 1],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
      ]))).is.true
    
    moveDownOneAfterInterval()
    
    expect(areEqual(getBoard().grid,([
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 1, 1],
      [0, 0, 0, 0, 1, 1],
      [0, 0, 0, 0, 0, 0],
    ]))).is.true

    moveDownOneAfterInterval()

    expect(areEqual(getBoard().grid,([
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 1, 1],
      [0, 0, 0, 0, 1, 1],
    ]))).is.true

    moveDownOneAfterInterval()

    expect(areEqual(getBoard().grid,([
      [0, 1, 1, 0, 0, 0],
      [0, 1, 1, 0, 0, 0],
      [0, 0, 0, 0, 1, 1],
      [0, 0, 0, 0, 1, 1],
    ]))).is.true

    keyPressed = { key: 'm' }
      keyWasPressed(keyPressed)

      expect(areEqual(getBoard().grid,([
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 1, 1, 0, 1, 1],
      [0, 1, 1, 0, 1, 1],
      ]))).is.true

  })
})