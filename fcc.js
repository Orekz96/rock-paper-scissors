

const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const choice = options[Math.floor(Math.random() * options.length)];
   
    return choice;
}

function checkWinner(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "Tie";
    }
    else if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock")
    ) {
        return "player";
    } 
    else {
        return "Computer";
    }
}

function playRound(playerSelection, computerSelection) {
    const result = checkWinner(playerSelection, computerSelection);
    if (result == "Tie") {
        return "It's a tie!"
    }
    else if (result == "Player") {
        return `You Win! ${playerSelection} beats ${computerSelection}`
    }
    else{
        return`You Lose! ${computerSelection} beats ${playerSelection}`
    }
}

function getPlayerChoice() {
    let validatedInput = false;
    while(validatedInput == false){
        const choice = prompt("Rock Paper Scissors");
        if (choice == null) {
            continue;
        }
        const choiceInLower = choice.toLowerCase();
        if (options.includes(choiceInLower)) {
            validatedInput = true;
            return choiceInLower;
        }
    }
}

function game(){
    let scorePlayer = 0;
    let scoreComputer =0;
    console.log("Welcome!")
    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        console.log("------------");
        if(checkWinner(playerSelection, computerSelection) == "player") {
            scorePlayer++;
        } 
        else if (checkWinner(playerSelection, computerSelection)) {
            scoreComputer++;
        }
    }
    console.log("Game Over!!!")
    if(scorePlayer > scoreComputer){
        console.log("Player was the winner");
    }
    else if(scorePlayer < scoreComputer) {
        console.log("Computer was the winner");
    }
    else{
        console.log("We have a tie!");
    }

}

game()


/*
const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userchoice
let computerChoice
let result 

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) //or you can use possibleChoices.length
    
    if (randomNumber === 1) {
        computerChoice = 'rock'
    }
    if (randomNumber === 2) {
    computerChoice = 'scissors'
}
    if (randomNumber === 3) {
    computerChoice = 'paper'
}
computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice) {
        result = 'its a draw!'
    }
    if (computerChoice === 'rock' && userChoice === 'paper') {
        result = 'you win'
    }
    if (computerChoice === 'rock' && userChoice === 'scissors') {
        result = 'you lose'
    }
    if (computerChoice === 'paper' && userChoice === 'scissors') {
        result = 'you win'
    }
    if (computerChoice === 'paper' && userChoice === 'rock') {
        result = 'you lose'
    }
    if (computerChoice === 'scissors' && userChoice === 'rock') {
        result = 'you win'
    }
    if (computerChoice === 'scissors' && userChoice === 'paper') {
        result = 'you lose'
    }
    resultDisplay.innerHTML = result
}
    */