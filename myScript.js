window.onload=function(){
    let humanScore = 0, computerScore = 0;
    console.log("humanScore: "+ humanScore +" computerScore:"+ computerScore);


    function getComputerChoice(){
        let randomNumber = Math.floor(Math.random() * 3) + 1;
        //console.log(typeof randomNumber);
        if (randomNumber == 1){
            //console.log(randomNumber +" PC chose <<--- Rock --->>");
        }else if (randomNumber == 2){
            //console.log(randomNumber +" PC chose <<--- Paper --->>");
        }else {
            //console.log(randomNumber +" PC chose <<--- Scissors --->>");
        }
        return randomNumber;
    }

    function getHumanChoice(){
        let humanChoice = Number(window.prompt("What's your choice? (1)Rock (2)Paper (3)Scissors"));
        console.log(humanChoice);
        return humanChoice;
    }
    
    while(humanScore + computerScore < 5){
        playGame();   
    }
    if(humanScore + computerScore == 5){
        if (humanScore > computerScore ){console.log("You Won " + humanScore + " - " + computerScore);}
        else{console.log("You Lost " + humanScore + " - " + computerScore);}
    }
    

    function playGame(){
        playRound(getHumanChoice(),getComputerChoice());
    }

    

    function playRound(humanChoice,computerChoice){
        if (humanChoice == 1 && computerChoice == 3){
            console.log("Rock beats Scissors. You WIN!");
            humanScore += 1;
        }else if (humanChoice == 1 && computerChoice == 2){
            console.log("Paper beats Rock. You LOSE!");
            computerScore += 1;
        }else if (humanChoice == 1 && computerChoice == 1){
            console.log("You both chose ROCK. It's a DRAW!");
        }else if (humanChoice == 2 && computerChoice == 1){
            console.log("Paper beats Rock. You WIN!");
            humanScore += 1;
        }else if (humanChoice == 2 && computerChoice == 2){
            console.log("You both chose Paper. It's a DRAW!");
        }else if (humanChoice == 2 && computerChoice == 3){
            console.log("You both chose ROCK. You LOSE!");
            computerScore += 1;
        }else if (humanChoice == 3 && computerChoice == 1){
            console.log("Rock beats Scissors. You LOSE!");
            computerScore += 1;
        }else if (humanChoice == 3 && computerChoice == 2){
            console.log("Scissors beats Paper. You WIN!");
            humanScore += 1;
        }else if (humanChoice == 3 && computerChoice == 3){
            console.log("You both chose Scissors. It's a DRAW!");
        }
        console.log("humanScore: "+ humanScore +" computerScore:"+ computerScore);
    }

} //////////////////// This is END of the PROGRAM
