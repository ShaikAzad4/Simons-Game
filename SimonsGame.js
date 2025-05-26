let gameSeq = [];
let userSeq = [];
let started = false;
let h3 = document.querySelector("h3");
let level = 0;
let btns = ["red","green","yellow","blue"];
document.addEventListener("keypress", function(){
    if(started == false){
        console.log("game is started");
        started = true;

        levelUp();
    }
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },200);
}

 function levelUp(){
    userSeq = [];
    level++;
    h3.innerText = `Level ${level}`;

    let randIndx = Math.floor(Math.random()*3);
    let randColor = btns[randIndx];
    let randbtn = document.querySelector(`.${randColor}`);//To get string as a normal text to acces the class
    gameSeq.push(randColor); 
    console.log(gameSeq);
    btnFlash(randbtn);
 }

function checkAns(idx){
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h3.innerHTML = `Game over! Your score was <b>${level}</b> <br> Press any key to start`;
        reset();
    }
}

 function btnPress(){
    let btn = this;
    userFlash(btn);
    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);

 }
 let allBtns = document.querySelectorAll(".btn");
 for(btn of allBtns){
    btn.addEventListener("click",btnPress);
 }
  function reset(){
    started = false;
    userSeq = [];
    gameSeq = [];
    level = 0;
  }