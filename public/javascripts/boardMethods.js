

export var boardMethods = {
    draw: function (ctx, boardInfo) {
        ctx.moveTo(0, 0);
        ctx.lineTo(boardInfo.width, 0);
        ctx.lineTo(boardInfo.width, boardInfo.height)
        ctx.lineTo(0, boardInfo.height)
        ctx.lineTo(0, 0)
        ctx.lineWidth = 1;
        ctx.stroke()
        
        ctx.lineWidth = 0.5;
        
        for (var i = 1; i < boardInfo.columns; i++) {
            ctx.moveTo((boardInfo.width/boardInfo.columns)*i, 0);
            ctx.lineTo((boardInfo.width/boardInfo.columns)*i, boardInfo.height);
            ctx.stroke();
          }
          for (var i = 1; i < boardInfo.rows; i++) {
            ctx.moveTo(0,(boardInfo.height/boardInfo.rows)*i);
            ctx.lineTo(boardInfo.width,(boardInfo.height/boardInfo.rows)*i);
            ctx.stroke();
          }
    }
}



