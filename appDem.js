// get cases
let gameBoard = document.getElementById("gameBoard");
let cases = gameBoard.getElementsByTagName("div");

// choice column & line nbr & number of bomb
let col = 25;
let line = 20;
let nbrBomb = 10;

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

// place X bomb
let count = 0;
for(let i = 0 ; i < nbrBomb ; i++){
    let bomb = document.createElement('div');
    bomb.className = "bomb";
    bomb.style.backgroundColor = 'black';
    bomb.style.border = '1px red solid';
    bomb.style.width = '1.5rem';
    bomb.style.height = '1.5rem';
    let x = Math.round(Math.random() * cases.length);
    console.log(x);
    if(cases[x].children.length === 0){
        cases[x].appendChild(bomb);
        count++;
        console.log(count);
    }
}

// eval cases value in function of bomb
for(let i = 0 ; i < cases.length ; i++){

}