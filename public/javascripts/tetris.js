import { boardMethods } from "./boardMethods.js"
export var tetris = {
    run : function (document) {
        
        const board = {
            width: 400,
            height: 500,
            rows: 20,
            columns: 16
        }
        board.matrix = [board.columns][board.rows]
        var canvas = document.createElement("canvas");
        document.getElementsByTagName('body')[0].appendChild(canvas);
        canvas.width = board.width;
        canvas.height = board.height
        var ctx = canvas.getContext('2d')

        boardMethods.draw(ctx, board)

         
    }
}