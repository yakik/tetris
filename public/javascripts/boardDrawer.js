import { getCellValue } from "./board.js"

var cellColours = ["white","yellow","green","purple","red", "orange", "blue", "grey"]

export function redraw(board) {
    drawCells(board.rows, board.cols, board)
}

var myRows

export function drawCells(boardRows, boardColumns, board) {
    
    for (var col = 0; col < boardColumns; col++)
        for (var row = 0; row < boardRows; row++) {
            var cell = document.getElementById("myTD_" + row + "_" + col)
            cell.style.backgroundColor = cellColours[getCellValue(board, { col: col, row: row })];
        }
}

export function drawBoard(boardRows, boardColumns, board) {

    myTable = document.createElement("TABLE");
    myTable.setAttribute("id", "myTable");

    document.body.appendChild(myTable);

    myRows = new Array(boardRows)

    var myTable = document.createElement("TABLE");
    myTable.setAttribute("id", "myTable");
    document.body.appendChild(myTable);
    for (var row = 0; row < boardRows; row++) {
        var y = document.createElement("TR");
        y.setAttribute("id", "myTr"+row);
        document.getElementById("myTable").appendChild(y);
        for (var column = 0; column < boardColumns; column++) {
            var z = document.createElement("TD");
            z.setAttribute("id","myTD_"+row+"_"+column)
            z.width = 20
            z.height = 20
            var t = document.createTextNode(" ");
            z.appendChild(t);
            document.getElementById("myTr"+row).appendChild(z)
        }
    }

}





