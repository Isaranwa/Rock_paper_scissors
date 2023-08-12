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
let playerSelection = player.toLowerCase();
let computerSelection = computerChoice();

 function playRound(playerSelection,computerSelection){
        if ( computerSelection === playerSelection){
            console.log( "It is a draw!");
        }
            else if ((computerSelection==="rock" && playerSelection==="paper")){
                console.log("Player wins!");
            }
                else if((computerSelection ==="paper")&&(playerSelection=== "scissors")){
                    console.log ("Player Wins!");
                }
            else if((computerSelection ==="paper")&&(playerSelection=== "scissors")){
                console.log ("Player Wins!");
            }
                else if ((computerSelection==="scissors")&&(playerSelection==="paper")){
                    console.log ("Computer Wins!");
                }

            else if((computerSelection ==="scissors")&&(playerSelection=== "rock")){
                    console.log ("Player Wins!");}  
                    else if ((computerSelection==="rock")&&playerSelection==="scissors"){
                        console.log("Computer wins");
                    }                        
 }

console.log(playRound(playerSelection,computerSelection));



    





    

   
        
    
    



    
  
    
    

