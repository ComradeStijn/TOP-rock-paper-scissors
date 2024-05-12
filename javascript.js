const CHOICES = ["rock", "paper", "scissors"];

let humanScore = 0, computerScore = 0, gameCounter = 0;
let gameEnd = false;

initializeGame();

function initializeGame() {
    const gameCounter = document.querySelector(".gameCounter");
    const resultField = document.querySelector(".results");

    if (!gameEnd) {
        gameCounter.textContent = `Your score is ${humanScore}. Your opponent's score is ${computerScore}`;    
        const result = document.createElement("p");
        result.classList.toggle("resultField");
        result.textContent = `Welcome to rock, paper, scissors.\n
        First to reach 5 points wins!`;
        resultField.appendChild(result);
    };

}


document.addEventListener("click", function(button) {
    if (!gameEnd) {
        switch (button.target.id) {
            case "rock":
                playRound("rock", getComputerChoice());
                break;
            case "paper":
                playRound("paper", getComputerChoice());
                break;
            case "scissors":
                playRound("scissors", getComputerChoice());
                break;
            default:
                break;
        };
    };
});


function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        result.textContent = `You tie round ${gameCounter}`;
        gameCounter++;
        return;
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result.textContent(`You win round ${gameCounter}. ${humanChoice} 
                            beats ${computerChoice}}`);
        humanScore++;
        gameCounter++;
        return;
    } else {
        result.textContent(`You lose round ${gameCounter}. ${computerChoice}
                            beats ${humanChoice}`);
        computerScore++;
        gameCounter++;
        return;
    }
}


function getComputerChoice() {
    // Get random integer between 1 and 3
    randomInt = Math.floor(Math.random() * 3 + 1);
    switch (randomInt) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
        default:
            return;
    }
}




