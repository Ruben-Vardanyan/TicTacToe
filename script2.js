console.log("wegewg")
const restartBtn = document.querySelector('#restart')
const quitBtn = document.querySelector('#quit')
const restartBtn2 = document.querySelector('#restart2')
const quitBtn2 = document.querySelector('#quit2')


const cells = document.querySelectorAll(".cell")
const XcountId = document.querySelector("#XcountId")
const OcountId = document.querySelector("#OcountId")
const winnerBox = document.querySelector('.winnerBox')
const winnerText = document.querySelector('.winnerBox h2')
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
    if( player != "O" ){
        console.log(player)
        if(player == "O") return;
        cells.forEach(cell => cell.addEventListener("click",() => cellClicked(cell,player)))
    }
    else if(player == "O"){
        setTimeout(() => {
           for(let i= 0 ;i<14;i++){
            //    console.log(i)
           }
            computer()
        },250 );
    }
    restartBtn.addEventListener("click", restartGame)
    running = true;
}
function rand(min,max){
    return Math.floor(Math.random() * (max - min) + min)
}





function computer(){
    console.log(1)
    if(player != "O") return; 
    if(!options.includes("X") && !options.includes("O") ){
        cellClicked(cells[rand(0,9)])
    }
    else{
        let checked = false
        for(let i = 0; i < winConditions.length; i++){
            const condition = winConditions[i];
            const cell1 = options[condition[0]]
            const cell2 = options[condition[1]]
            const cell3 = options[condition[2]]
            if(cell2 == cell3 && cell2 == "O" && cell1 == ""){
                cellClicked(cells[condition[0]])
                checked = true
                break
            } else if(cell1 == cell3 && cell1 == "O" && cell2 == ""){
                cellClicked(cells[condition[1]])
                checked = true
                break
            } else if(cell1 == cell2 && cell2 == "O" && cell3 == ""){
                cellClicked(cells[condition[2]])
                checked = true
                break
            } 
        }
        

        if(checked) return;

        for(let i = 0; i < winConditions.length; i++){
            const condition = winConditions[i];
            const cell1 = options[condition[0]]
            const cell2 = options[condition[1]]
            const cell3 = options[condition[2]]
            if(cell1 == cell2 && cell2 == "X" && cell3 == ""){
                cellClicked(cells[condition[2]])
                checked = true
                break
            } else if(cell3 == cell2 && cell2 == "X" && cell1 == ""){
                cellClicked(cells[condition[0]])
                checked = true
                break
            } else if(cell1 == cell3 && cell3 == "X" && cell2 == ""){
                cellClicked(cells[condition[1]])
                checked = true
                break
            }    
        }

        if(checked) return;


        for(let i = 0; i < winConditions.length; i++){
            const condition = winConditions[i];
            const cell1 = options[condition[0]]
            const cell2 = options[condition[1]]
            const cell3 = options[condition[2]]
            if(cell2 == cell3 && cell2 == "O" && cell1 == ""){
                cellClicked(cells[condition[0]])
                checked = true
                break
            } else if(cell1 == cell3 && cell1 == "O" && cell2 == ""){
                cellClicked(cells[condition[1]])
                checked = true
                break
            } else if(cell1 == cell2 && cell2 == "O" && cell3 == ""){
                cellClicked(cells[condition[2]])
                checked = true
                break
            } else if(cell1 == cell2 && cell2 == "" && cell3 == ""){
                // very hard version
                if(cells[4].textContent == ""){
                    cellClicked(cells[4])
                }else{
                    cellClicked(cells[condition[rand(0,3)]])
                }
                checked = true
                break
            } 
        }

        if(checked) return;

        for(let i = 0; i < winConditions.length; i++){
            const condition = winConditions[i];
            const cell1 = options[condition[0]]
            const cell2 = options[condition[1]]
            const cell3 = options[condition[2]]
            if(cell1 == "O" && cell2 == "X" && cell3 == ""){
                cellClicked(cells[condition[2]])
                checked = true
                break
            } else if(cell3 == "O" && cell2 == "X" && cell1 == ""){
                cellClicked(cells[condition[0]])
                checked = true
                break
            } else if(cell1 == "X" && cell3 == "O" && cell2 == ""){
                cellClicked(cells[condition[1]])
                checked = true
                break
            } else if(cell1 == "X" && cell2 == "O" && cell3 == ""){
                cellClicked(cells[condition[2]])
                checked = true
                break
            } else if(cell3 == "X" && cell2 == "O" && cell1 == ""){
                cellClicked(cells[condition[0]])
                checked = true
                break
            } else if(cell1 == "O" && cell3 == "X" && cell2 == ""){
                cellClicked(cells[condition[1]])
                checked = true
                break
            }     
        }

        if(checked) return;

        for(let i = 0; i < winConditions.length; i++){
            const condition = winConditions[i];
            const cell1 = options[condition[0]]
            const cell2 = options[condition[1]]
            const cell3 = options[condition[2]]
            if(cell1 == ""){
                cellClicked(cells[condition[0]])
                checked = true
                break
            } 
            else if(cell2 == ""){
                cellClicked(cells[condition[1]])
                checked = true
                break
            }
            else if(cell3 == ""){
                cellClicked(cells[condition[2]])
                checked = true
                break
            }
        }

        
        console.log(checked)
    }
}












function cellClicked(cell , pl = "O"){

    const cellIndex = cell.getAttribute("cellIndex")
    if(player == "X" && options[cellIndex] == "") {
        cell.style.color = "#47cf73";
    }
    else if(player == "O" && options[cellIndex] == ""){
        cell.style.color = "#26c5c6";
    }
    if(options[cellIndex] != "" || !running) return;

    updateCell(cell , cellIndex);
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
        // changePlayer()
        running = false;
        
        setTimeout(() => {
            for (let index = 0; index < 15; index++) {
                // console.log(index)
            }
            restartGame(true);
        },500 );
    }
    else if(!options.includes("") ){
        //changePlayer()
        running = false  
        setTimeout(() => {
            for (let index = 0; index < 15; index++) {
                // console.log(index)
            }
            restartGame(true);
        },500 );
    }
    else{
        
        running = false
        setTimeout(() => {
           for(let i= 0 ;i<14;i++){
            //    console.log(i)
           }
           running = true
           changePlayer()
           computer()   
        },250 );
        
    }
    if(OcountId.textContent >= 4 || XcountId.textContent >= 4){
        //changePlayer()
        running = false  
        setTimeout(() => {
            for (let index = 0; index < 15; index++) {
                // console.log(index)
            }
            winnerBox.style.transform = `translateY(0)`;
            winnerText.textContent = `Game Over`
            // restartGame(false);
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
    winnerBox.style.transform = `translateY(-100%)`;
    winnerText.textContent = ``
}

restartBtn.addEventListener("click", () =>{
    restartGame(false)
})
quitBtn.addEventListener("click", () =>{
    restartGame(false)
    window.open("index.html","_self");
})
restartBtn2.addEventListener("click", () =>{
    restartGame(false)
})
quitBtn2.addEventListener("click", () =>{
    restartGame(false)
    window.open("index.html","_self");
})