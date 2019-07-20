/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


var scores = [0,0];
var roundscore = 0; 
//the first player is 0 and the second player is 0;
var activeplayer = 0; 

var dice = Math.floor(Math.random()*6)+1; 

document.querySelector('#current-' + activeplayer).textContent = dice; 

score0 = document.querySelector('#score-0').textContent;
score1 = document. querySelector('#score-1').textContent;

console.log(score0);




/*
document.querySelector('#score-0').textContent = '0';
document.querySelector('#score-1').textContent = '0';
document.querySelector('#current-0').textContent = '0'; 
document.querySelector('#content-1').textContent = '0';
*/




function btn(){
    //select a random number. 
    var dice = Math.floor(Math.random()*6)+1
    //change the image to the number that you have selected. 
    document.querySelector('.dice').style.display = 'block';

    document.querySelector('.dice').src = 'dice-'+dice+'.png'; 
    if(dice!==1){
        //Add score and continue playing
        roundscore += dice; 
        console.log(roundscore+"This is the roundscore of the btn");
        document.querySelector('#current-'+activeplayer).textContent = roundscore; 
    }else{
        roundscore= 0; 
       nextplayer();
    }
}

document.querySelector('.btn-roll').addEventListener('click',btn);



function holdbtn(){
    //update the global score. 
    scores[activeplayer] += roundscore ; 
    //Update the UI
    document.querySelector('#score-'+activeplayer).textContent = scores[activeplayer];

    //check if player won the game.
    
    if(scores[activeplayer]>=20){
        document.querySelector('#name-'+activeplayer).textContent = "Winner!";
        //hide the dice. 
        document.querySelector('.dice').style.display = 'none';


    }else{
        nextplayer();
    }
    
    //switch the player
    
    
    roundscore = 0; 

}

function nextplayer(){
    if(activeplayer ==0){
        this.activeplayer = 1;
    } else{
        this.activeplayer = 0;
    }

    document.querySelector('#current-0').textContent = '0';
    document.querySelector('#current-1').textContent = '0';
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display = 'none';

}

document.querySelector('.btn-hold').addEventListener('click',holdbtn);


function newgame (){
    document.querySelector('#score-0').textContent = '0';
    document.querySelector('#score-1').textContent = '0';
    document.querySelector('#current-0').textContent = '0';
    document.querySelector('#current-1').textContent = '0';
    document.querySelector('#name-0').textContent = "PLAYER1";
    document.querySelector('#name-1').textContent = 'PLAYER2';

    scores[0] =0; 
    scores[1] = 0; 
    roundscore= 0; 
    activeplayer = 0; 

}
document.querySelector('.btn-new').addEventListener('click',newgame);















