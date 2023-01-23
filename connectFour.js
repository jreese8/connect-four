var playerRed ="R";
var playerYellow ="Y";
var currPlayer = playerRed;

var gameOver =false;
var board;

var rows = 6;
var columns = 7;

window.onload = function() {
    setGame();
}

//populates tiles within board
function setGame() {
    board = [];

    for (let r = 0; r < rows; r++) {
        for (let c=0; c < columns; c++)
        //JS
        rows.push(' ');

        //HTML
        //<div id ="0-0" class="tile"></div> this is appending <div id = "board"> in HTML
        let tile = document.createElement("div");
        tile.id = r.toString() + "-" + c.toString();
        tile.classList.add("tile");
        document.getElementById("board").append(tile);
    }
    board.push(row);
}