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
gameBoard.style.width = col * 2 + "vw";

// cases with function of nbr of column
for( let i = 0 ; i < cases.length ; i++){
    cases[i].style.width = 100 / col + "%";
}

for(let i = 0 ; i < nbrBomb ; i++){
    let bomb = document.createElement('span');
    bomb.className = "bomb";
    bomb.style.backgroundColor = 'black';
    bomb.style.border = '1px orange solid';
    bomb.style.width = '1.5vw';
    bomb.style.height = '3vh';
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
        cases[x].className = "death";
    }
    else {
        placeBomb(element);
    }
}


// eval cases value in function of bomb
// find cases with class name death
// for each write +1 before
let l;
let c;
for(let i = 0 ; i < cases.length ; i++){    // for each cases

    if(cases[i].className === "death"){     // if contain bomb
        // return coordinates c = n° column / l = n° line
        position(i);
    // for the bomb line
        // not the first column
        if(c > 0){
            if(cases[i-1].className !== "death"){   // add count column before
                if(cases[i-1].innerHTML.length === 0){
                    cases[i-1].innerHTML = "1";
                }
                else {
                    cases[i-1].innerHTML = (parseInt(cases[i-1].innerHTML) + 1).toString();
                }
            }
        }
        // not the last col
        if (c < col -1){
            if(cases[i+1].className !== "death"){   // add count column after
                if(cases[i+1].innerHTML.length === 0){
                    cases[i+1].innerHTML = "1";
                }
                else {
                    cases[i+1].innerHTML = (parseInt(cases[i+1].innerHTML) + 1).toString();
                }
            }
        }
    // for line before
        // not the first line
        if (l > 0){
            if(cases[i-col].className !== "death"){   // add count line before
                if(cases[i-col].innerHTML.length === 0){
                    cases[i-col].innerHTML = "1";
                }
                else {
                    cases[i-col].innerHTML = (parseInt(cases[i-col].innerHTML) + 1).toString();
                }
            }
            // not first column
            if(c > 0){
                if(cases[i-1-col].className !== "death"){   // add count line before column before
                    if(cases[i-1-col].innerHTML.length === 0){
                        cases[i-1-col].innerHTML = "1";
                    }
                    else {
                        cases[i-1-col].innerHTML = (parseInt(cases[i-1-col].innerHTML) + 1).toString();
                    }
                }
            }
            // not last column
            if (c < col -1){
                if(cases[i - col + 1].className !== "death"){   // add count line before column after
                    if(cases[i-col+1].innerHTML.length === 0){
                        cases[i-col+1].innerHTML = "1";
                    }
                    else {
                        cases[i+1-col].innerHTML = (parseInt(cases[i+1-col].innerHTML) + 1).toString();
                    }
                }
            }
        }
        // not the last line
        if(l < line-1){
            if(cases[i+col].className !== "death"){    // add count line after
                if(cases[i+col].innerHTML.length === 0){
                    cases[i+col].innerHTML = "1";
                }
                else {
                    cases[i+col].innerHTML = (parseInt(cases[i+col].innerHTML) + 1).toString();
                }
            }
            // not the first column
            if(c > 0){
                if(cases[i+col-1].className !== "death"){
                    if(cases[i+col-1].innerHTML.length === 0){
                        cases[i+col-1].innerHTML = "1";
                    }
                    else {
                        cases[i+col-1].innerHTML = (parseInt(cases[i+col-1].innerHTML) + 1).toString();
                    }
                }
            }
            if(c < col-1){
                if(cases[i+col+1].className !== "death"){
                    if(cases[i+col+1].innerHTML.length === 0){
                        cases[i+col+1].innerHTML = "1";
                    }
                    else {
                        cases[i+col+1].innerHTML = (parseInt(cases[i+col+1].innerHTML) + 1).toString();
                    }
                }
            }
        }
    }
}

function position (numCase){
    l = Math.floor(numCase / col);
    c = numCase - (l * col);
}

