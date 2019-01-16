function drawBoard(context) {
    var width = context.canvas.width;
    var height = context.canvas.height;
    drawLine(context, { from: { x: 0, y: height/3 }, to: { x: width, y: height/3 } });
    drawLine(context, { from: { x: 0, y: 2*height/3 }, to: { x: width, y: 2*height/3 } });
    drawLine(context, { from: { x: width/3, y: 0 }, to: { x: width/3, y: height } });
    drawLine(context, { from: { x: 2*width/3, y: 0 }, to: { x: 2*width/3, y: height } });
}

function drawLine(context, coordinates) {
    context.moveTo(coordinates.from.x, coordinates.from.y);
    context.lineTo(coordinates.to.x, coordinates.to.y);
    context.stroke();
}

function resizeCanvasAccordingToWindowSize(canvas) {
    canvas.width = 0.97 * window.innerWidth;
    canvas.height = 0.96 * window.innerHeight;
}

