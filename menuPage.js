let content = document.querySelector(".content");
const twoPlayer = document.querySelector('#twoPlayer')
let body = document.querySelector("body")
// content.innerHTML = '<a class="abs-box" href="https://ruben-vardanyan.github.io/MyLibrary/"><img src="LogoL.png"></a><div class="mainTable"><div class="bgTable"></div><div class="mainCell">X</div><div class="mainCell">O</div><div class="mainCell">O</div><div class="mainCell">X</div></div><h1>Tic Tac Toe</h1><button id="onePlayer">One Player</button><button id="twoPlayer">Two Player</button><h3>&copy; My Library 2022</h3>'


twoPlayer.addEventListener("click",()=>{
    window.open("twoPlayer.html","_self");
})