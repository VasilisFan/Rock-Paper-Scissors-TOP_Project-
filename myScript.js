
let humanScore = 0, computerScore = 0;
console.log("humanScore: "+ humanScore +" computerScore:"+ computerScore);

let btn = document.querySelectorAll("button");
btn.forEach((button)=>{
    button.addEventListener("click",()=>{
        if(button.id == "rock"){
            console.log("button.id = "+ button.id);
            playGame(1);
        }else if(button.id == "paper"){
            console.log("button.id = "+ button.id);
            playGame(2);
        }else{
            console.log("button.id = "+ button.id);
            playGame(3);
        }
    });
});

function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    //console.log(typeof randomNumber);
    if (randomNumber == 1){
        console.log(randomNumber +" PC chose <<--- Rock --->>");
    }else if (randomNumber == 2){
        console.log(randomNumber +" PC chose <<--- Paper --->>");
    }else {
        console.log(randomNumber +" PC chose <<--- Scissors --->>");
    }
    return randomNumber;
}

function playGame(humanChoice){
    playRound(humanChoice,getComputerChoice());
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


