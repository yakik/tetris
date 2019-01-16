function drawItem(context, item) {
    var width = context.canvas.width;
    var height = context.canvas.height;
    var XitemCenter = (item.x + 0.5) * width / 3
    var YitemCenter = (item.y + 0.5) * height / 3
    var Xoffset = width / 3 / 4
    var Yoffset = height / 3 / 4
    drawLine(context, {
        from: { x: XitemCenter - Xoffset, y: YitemCenter - Yoffset },
        to: { x: XitemCenter + Xoffset, y: YitemCenter + Yoffset }
    });
    drawLine(context, {
        from: { x: XitemCenter - Xoffset, y: YitemCenter + Yoffset },
        to: { x: XitemCenter + Xoffset, y: YitemCenter - Yoffset }
    });
}