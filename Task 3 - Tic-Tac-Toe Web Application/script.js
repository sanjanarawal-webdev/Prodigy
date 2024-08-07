console.log("Testing...")

// let music=new Audio("music.mp3")
// let turn=new Audio("ting.mp3")
//let gameover= new Audio("gameover.mp3")
let turn = "X";
let isgameover = false;

//Function to change the turn
const changeTurn =()=>{
    return turn==="X"?"O":"X"
}

//Function to check win
const checkWin=()=>{
    let boxtext = document.getElementsByClassName('boxtext')
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && 
           (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && 
           (boxtext[e[0]].innerText !== '')){
            
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won";
            isgameover = true;
            let img = document.querySelector('.imgbox').getElementsByTagName('img')[0];
            img.style.height = "150px";
            document.querySelector('.line').style.transform = `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector('.line').style.width = '20vw';
        }
    })
}

//Game logic
let boxes =document.getElementsByClassName("box");
let counter = 0;
Array.from(boxes).forEach(element=>{
    let boxtext = element.querySelector(".boxtext");  
    element.addEventListener('click', ()=>{
        if(boxtext.innerText===''){
            boxtext.innerText=turn;
            console.log(turn)
            counter += 1;
            checkWin();
            turn=changeTurn();
            if(!isgameover && counter!=9){
                document.getElementsByClassName('info')[0].innerText="Turn for "+turn;
            }
            if(!isgameover && counter==9){
                let draw = 'Game Draw'
                document.getElementsByClassName('info')[0].innerText = draw;
            }
        }
    })
})


// Add onclick listener 
reset.addEventListener('click',() =>{
let boxtexts = document.querySelectorAll('.boxtext');

Array.from(boxtexts).forEach(element => {
    element.innerText = ''
    });
    turn = "X"
    document.getElementsByClassName('info')[0].innerText="Turn for "+turn;
    isgameover = false;

     // Hide the GIF by setting height to 0px
     let img = document.querySelector('.imgbox').getElementsByTagName('img')[0];
     img.style.height = "0px";
     document.querySelector('.line').style.width = '';
})