function computerChoice(){
    let choice = (Math.floor(Math.random()*3));
    if (choice === 0){
        return "rock"
    }else if (choice === 1){
        return "paper"
    }else if(choice === 2){
        return "scissors"
    }
}
console.log(computerChoice());

let player = prompt("Enter your choice");
let playerSelection = player.replaceAll();
let computerSelection = computerChoice();

 function playRound(playerSelection,computerSelection){
        if ( computerSelection == playerSelection){
            return "It is a draw!";
        }else if (computerSelection == "rock"){
            return (playerSelection === "paper") ? "You win this round!" : "You loose Darling!"
        }else if (computerSelection === "paper"){
            return (playerSelection ==="scissors") ? "You win this round" : "you loose darling!"
        }else if (computerSelection ==="scissors"){
            return (playerSelection === "rock") ? "You win this round" : "you loose darling!"
        }
}

console.log(playRound(playerSelection,computerSelection))

function game(func,nTimes){
    let i = 1;
    for (i;i <= 5;i++){
        playRound()


    }
}
console.log(game(playRound(),5))

    





    

   
        
    
    



    
  
    
    

