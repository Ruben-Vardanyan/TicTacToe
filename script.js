console.log("wegewg")
const restartBtn = document.querySelector('#restart')
const quitBtn = document.querySelector('#quit')

const cells = document.querySelectorAll(".cell")
const XcountId = document.querySelector("#XcountId")
const OcountId = document.querySelector("#OcountId")
cells.forEach(cell => cell.textContent = "")
// let Xid = 0;
// let Oid = 0;
const winConditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

let options = ["","","","","","","","",""];
let player = "X";
let running = false;
startGame();


function startGame(){
    cells.forEach(cell => cell.addEventListener("click", cellClicked))
    restartBtn.addEventListener("click", restartGame)
    running = true;
}
function cellClicked(){
    const cellIndex = this.getAttribute("cellIndex")
    if(player == "X" && options[cellIndex] == "") {
        this.style.color = "#47cf73";
    }
    else if(player == "O" && options[cellIndex] == ""){
        this.style.color = "#26c5c6";
    }
    if(options[cellIndex] != "" || !running) return;

    updateCell(this , cellIndex);
    // changePlayer()
    checkWinner();
}
function updateCell(cell, index){
    options[index] = player
    cell.textContent = player
}
function changePlayer(){
    player = (player == "X") ? "O" : "X";
}
function checkWinner(){
    // player = (player == "X") ? "O" : "X";
    let won = false;
    for (let i = 0; i < winConditions.length; i++) {
        const condition = winConditions[i];
        const cell1 = options[condition[0]]
        const cell2 = options[condition[1]]
        const cell3 = options[condition[2]]
        if(cell1 == "" || cell2 == "" || cell3 == ""){
            continue;
        }
        if(cell1 == cell2 && cell2 == cell3){
            won = true;
            break;
        }
    }
    if(won){
        if(player == "X"){
            XcountId.textContent = Number(XcountId.textContent)+1
        }
        else{
            OcountId.textContent = Number(OcountId.textContent)+1
        }
        changePlayer()
        running = false;
        
        setTimeout(() => {
            for (let index = 0; index < 15; index++) {
                console.log(index)
            }
            restartGame(true);
        },500 );
    }
    else if(!options.includes("") ){
        changePlayer()
        running = false  
        setTimeout(() => {
            for (let index = 0; index < 15; index++) {
                console.log(index)
            }
            restartGame(true);
        },500 );
    }
    else{
        
        changePlayer()
        running = true
    }
    if(OcountId.textContent >= 8 || XcountId.textContent >= 8){
        changePlayer()
        running = false  
        setTimeout(() => {
            for (let index = 0; index < 15; index++) {
                console.log(index)
            }
            restartGame(false);
        },500 );

    }
}
function restartGame(continueGame){
    if(continueGame){
        
        player = player;
        options = ["","","","","","","","",""]; 
        cells.forEach(cell => cell.textContent = "")
        running = true;
        startGame();
    } else{
        player = "X"
        options = ["","","","","","","","",""]; 
        cells.forEach(cell => cell.textContent = "")
        running = true;
        XcountId.textContent = 0
        OcountId.textContent = 0
    }
}

restartBtn.addEventListener("click", () =>{
    restartGame(false)
})
quitBtn.addEventListener("click", () =>{
    restartGame(false)
    window.open("index.html","_self");
})