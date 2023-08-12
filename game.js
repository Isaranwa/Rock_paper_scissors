const playerText =document.querySelector("#player");
const computerText = document.querySelector("#computer");
const resultText = document.querySelector("#result");
const choiceBtns = document.querySelectorAll(".choiceBtn");
const scoreView = document.querySelector("#score");


let player;
let computer;
let playerScore = 0;
let computerScore = 0;
let rounds = 5;
 

function playRound(player,computer){
    for(i=0;i <= 5;i++){
    if ( computer === player && rounds< 5 ){
        return  "It is a draw!";
    }else if(computer==="rock"&& player==="paper"){
        playerScore++;
        console.log(playerScore);
        return ("You win! Computer looses!");
    }else if(computer==="paper"&& player==="scissors"){
        playerScore++;
        console.log(playerScore);
        return ("You win! Computer looses!");
    }else if(computer==="scissors"&& player==="rock"){
        playerScore++;
        console.log(playerScore);
        return ("You win! Computer looses!" );
    }else {
        computerScore++ ;
        console.log(computerScore);
        return (`Computer wins! You Loose`);
    }

}
}





function computerChoice(){
    let choice = (Math.floor(Math.random()*3)+1);

    switch(choice){
        case 1:
        computer ="rock";
        break;
        case 2:
            computer ="paper";
            break;
        case 3:
            computer ="scissors";
            break;
    }
}

choiceBtns.forEach(button=>button.addEventListener("click",()=>
{
    player=button.textContent;
    computerChoice();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = playRound(player,computer);
    scoreView.textContent = `0${playerScore}:0${computerScore}`
    
}));


 




 

 
 


    





    

   
        
    
    



    
  
    
    

