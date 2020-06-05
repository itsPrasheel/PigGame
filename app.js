
var current,total,playerNo,flag;
flag=true;
current=0;
total=[0,0];
playerNo=0;
document.querySelector('.dice').style.display='none';
document.querySelector('.btn-roll').addEventListener('click',function(){
    if(flag==true)
    {
    var diceRoll=Math.floor(Math.random()*6)+1;
    var diceDOM=document.querySelector('.dice');
    if(diceRoll==1)
    {
        current=0;
        document.getElementById('current-'+playerNo).textContent=current;
        playerNo=1-playerNo;
        diceDOM.src='dice-1.png';
        document.getElementById('current-'+playerNo).textContent=0;
        document.querySelector('.player-1-panel').classList.toggle('active');
        document.querySelector('.player-0-panel').classList.toggle('active');
    }
    else{
    diceDOM.style.display='block';
    diceDOM.src='dice-'+diceRoll+'.png';
    current+=diceRoll;
    document.getElementById('current-'+playerNo).textContent=current;
    }
    
    }
})

document.querySelector('.btn-hold').addEventListener('click',function(){
    if(flag==true){
    total[playerNo]+=current;
    if(total[playerNo]>=100)
    {
        document.getElementById('name-'+playerNo).textContent='Winner!';
        flag=false;
        document.getElementById('score-'+playerNo).textContent=total[playerNo];
        document.querySelector('.player-1-panel').classList.remove('active');
        document.querySelector('.player-0-panel').classList.remove('active');
        document.querySelector('.dice').style.display='none';
    }

    else
    {    
    current=0;
    document.getElementById('current-'+playerNo).textContent=0;
    document.getElementById('score-'+playerNo).textContent=total[playerNo];
    playerNo=1-playerNo;
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.player-0-panel').classList.toggle('active');
    }
}
})

document.querySelector('.btn-new').addEventListener('click',function(){
    current=0;
        document.querySelector('.player-1-panel').classList.remove('active');
        document.querySelector('.player-0-panel').classList.remove('active');
        document.querySelector('.player-0-panel').classList.add('active');
    playerNo=0;
    total[0,0];
    document.getElementById('current-0').textContent=0;
    document.getElementById('current-1').textContent=0;
    document.getElementById('score-0').textContent=0;
    document.getElementById('score-1').textContent=0;
    document.querySelector('.dice').style.display('none');

})
