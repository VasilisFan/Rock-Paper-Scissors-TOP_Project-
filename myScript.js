
let humanScore = 0, computerScore = 0, round = 0;
console.log("humanScore: "+ humanScore +" computerScore:"+ computerScore);

let score = document.querySelector(".scorePlay");
score.innerHTML = `${humanScore} / ${computerScore}`;
let gameRound = document.querySelector(".gameRound");
let roundResult = document.querySelector(".roundResult");
let rpsBtn = document.querySelectorAll(".rpsBtn");


///// getHumanChoice
let btn = document.querySelectorAll("button");
btn.forEach((button)=>{
    button.addEventListener("click",()=>{
        rpsBtn.forEach((rpsBtn)=>{
            rpsBtn.style.cssText = "background: none;";
        });
        if(button.id == "rock"){
            button.setAttribute("style", "background: red;");
            console.log("button.id = "+ button.id);
            playGame(1);
        }else if(button.id == "paper"){
            button.setAttribute("style", "background: red;");
            console.log("button.id = "+ button.id);
            playGame(2);
        }else{
            button.setAttribute("style", "background: red;");
            console.log("button.id = "+ button.id);
            playGame(3);
        }
    });
});

function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    //console.log(typeof randomNumber);
    if (randomNumber == 1){
        let comPLay = document.querySelector("#rock");
        let style = window.getComputedStyle(comPLay);
        if(style.backgroundColor === "rgb(255, 0, 0)"){
            comPLay.setAttribute("style", "background: orange;");
        }else{
            comPLay.setAttribute("style", "background: yellow;");
        }
        console.log(randomNumber +" PC chose <<--- Rock --->>");
    }else if (randomNumber == 2){
        let comPLay = document.querySelector("#paper");
        let style = window.getComputedStyle(comPLay);
        if(style.backgroundColor === "rgb(255, 0, 0)"){
            comPLay.setAttribute("style", "background: orange;");
        }else{
            comPLay.setAttribute("style", "background: yellow;");
        }
        console.log(randomNumber +" PC chose <<--- Paper --->>");
    }else {
        let comPLay = document.querySelector("#scissors");
        let style = window.getComputedStyle(comPLay);
        if(style.backgroundColor === "rgb(255, 0, 0)"){
            comPLay.setAttribute("style", "background: orange;");
        }else{
            comPLay.setAttribute("style", "background: yellow;");
        }
        console.log(randomNumber +" PC chose <<--- Scissors --->>");
    }
    return randomNumber;
}

function playGame(humanChoice){
    round ++;
    gameRound.innerHTML = `Game Count: ${round}`;
    playRound(humanChoice,getComputerChoice());
}

function playRound(humanChoice,computerChoice){
    if (humanChoice == 1 && computerChoice == 3){
        roundResult.innerHTML = "Rock beats Scissors. You WIN!";
        humanScore += 1;
    }else if (humanChoice == 1 && computerChoice == 2){
        roundResult.innerHTML = "Paper beats Rock. You LOSE!";
        computerScore += 1;
    }else if (humanChoice == 1 && computerChoice == 1){
        roundResult.innerHTML = "You both chose ROCK. It's a DRAW!";
    }else if (humanChoice == 2 && computerChoice == 1){
        roundResult.innerHTML = "Paper beats Rock. You WIN!";
        humanScore += 1;
    }else if (humanChoice == 2 && computerChoice == 2){
        roundResult.innerHTML = "You both chose Paper. It's a DRAW!";
    }else if (humanChoice == 2 && computerChoice == 3){
        roundResult.innerHTML = "You both chose ROCK. You LOSE!";
        computerScore += 1;
    }else if (humanChoice == 3 && computerChoice == 1){
        roundResult.innerHTML = "Rock beats Scissors. You LOSE!";
        computerScore += 1;
    }else if (humanChoice == 3 && computerChoice == 2){
        roundResult.innerHTML = "Scissors beats Paper. You WIN!";
        humanScore += 1;
    }else if (humanChoice == 3 && computerChoice == 3){
        roundResult.innerHTML = "You both chose Scissors. It's a DRAW!";
    }
    score.innerHTML = `${humanScore} / ${computerScore}`;
}