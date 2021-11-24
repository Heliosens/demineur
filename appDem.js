// get cases
let gameBoard = document.getElementById("gameBoard");
let cases = gameBoard.getElementsByTagName("div");


// get text
let nbrT = document.getElementById("nbrT");


// choice column & line nbr & number of bomb
let col = 5;
let line = 4;
let nbrBomb = 5;
nbrT.innerHTML = nbrBomb.toString();

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

for(let i = 0 ; i < nbrBomb ; i++){

    let bomb = document.createElement('span');
    bomb.className = "bomb";
    bomb.style.backgroundColor = 'black';
    bomb.style.border = '1px red solid';
    bomb.style.width = '1.5rem';
    bomb.style.height = '1.5rem';
    placeBomb(bomb);
}

// place X bomb
/**
 * @param element
 */
function placeBomb (element){
    let x = Math.floor(Math.random() * cases.length);
    // console.log(x);
    if(cases[x].children.length === 0){
        cases[x].appendChild(element);
    }
    else {
        placeBomb(element);
    }
}

// eval cases value in function of bomb
for (let c = 0 ; c < col ; c +=5){  // 0 to col < 5

    for(let i = 0 ; i < cases.length ; i ++){  // i
        if (cases[c + i].children.length === 1){
            cases[c+i-1].innerHTML = "1";
            // if(c > 0){
            //     if(isNaN(parseInt(cases[c+i-1].innerHTML))){
            //         cases[c+i-1].innerHTML = "1";
            //         console.log("c = " + c + " i = " + i);
            //     }
            //     else {
                    // cases[c+i-1].innerHTML = (parseInt(cases[c+i-1].innerHTML) + 1).toString();
                    // console.log("C = " + c + " I = " + i);

        //         }
        //
        //     }
        //
        //     // console.log('case c+i = ' + (c + i));
        }
    }
}

