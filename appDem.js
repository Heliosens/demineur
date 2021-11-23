// get cases
let gameBoard = document.getElementById("gameBoard");
let cases = gameBoard.getElementsByTagName("div");

// choice column & line nbr
let col = 25;
let line = 25;

// create col * lin div
for(let i = 0 ; i < (col * line) ; i++){
    let frame = document.createElement("div");
    gameBoard.appendChild(frame);
}

// gameBoard width = col * 2 rem
gameBoard.style.width = col * 2 + "rem";

// cases with function of nbr of column
for( let i = 0 ; i < cases.length ; i++){
    cases[i].style.width = 100 / col + "%";
}

