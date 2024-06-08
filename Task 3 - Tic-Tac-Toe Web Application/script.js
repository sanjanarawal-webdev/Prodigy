console.log("Welcom to tic tac toe Game")

let music = new Audio("music.mp3")
let turn = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")

let turn = "X";

// Function to change the turn
const changeTurn = ()=>{
    return turn=== "X"?"0" : "X"
}

// Function to check for a winner
const checkWin = ()=>{

}

// Game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boetext = document.querySelector('.boxtext');
    boxtext.addEventListenenr('click', ()=>{
        if(e.innerText = turn;
            changeTurn();
            audioTurn.play();
            checkWin();
            document.getElementsByClassName(turn)[0].innerText = "Turn for " + turn;
        )
    })
})