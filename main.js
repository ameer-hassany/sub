const player = document.getElementById('player')
const block = document.getElementById('block')
const sc = document.getElementById('score')
let score = 0

function moveLeft(){
    const curLeft = parseInt(window.getComputedStyle(player).getPropertyValue('left'));
    if(curLeft<=0) return
    const newLeft = curLeft-100;
    player.style.left = newLeft + "px";
    
}
function moveRight(){
    const curLeft = parseInt(window.getComputedStyle(player).getPropertyValue('left'));
    if(curLeft >=200) return
    const newLeft = curLeft+100;
    player.style.left = newLeft + "px";
}

document.addEventListener('keydown',(event)=>{
    if(event.key == "ArrowLeft") moveLeft();
    else if(event.key == "ArrowRight") moveRight();
    
})

block.addEventListener('animationiteration',()=>{
    const randpos = Math.floor((Math.random()*3))*100;
    block.style.left = randpos + "px";
    score++;
    sc.innerHTML=`score : ${score}`
    if(score >= 5 ){
        block.style.animationDuration = 1 + "s"
    }
    if(score >= 10 ){
        block.style.animationDuration = 0.7 + "s"
    }
     if(score >= 20 ){
        block.style.animationDuration = 0.5 + "s"
    }
})

setInterval(()=>{
    let playerLeft = parseInt(window.getComputedStyle(player).getPropertyValue('left'));
    let blockRight = parseInt(window.getComputedStyle(block).getPropertyValue('left'));
    let blockTop = parseInt(window.getComputedStyle(block).getPropertyValue('top'));
    
    if(playerLeft == blockRight&&blockTop < 450 && blockTop >310 ){
        
        alert(`gameover!!!! \n yors score:${score}`);
        block.style.top = -100  + "px";
        score= 0; 
        location.reload();
    }
},1)
