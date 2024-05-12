const CHOICES = ["rock", "paper", "scissors"];

let humanScore = 0, computerScore = 0, counter = 1;
let gameEnd = false;
const gameCounter = document.querySelector(".gameCounter");
const resultField = document.querySelector(".results");
const result = document.createElement("p");

updateText();


function updateText() {
    if (counter === 1 && !gameEnd) {
        result.classList.toggle("resultField");
        result.textContent = `Welcome to rock, paper, scissors.\n
        First to reach 5 points wins!`;
        resultField.appendChild(result);
    } 

    if (humanScore === 5) {
        gameEnd = true;
        result.textContent = `You won in ${counter} rounds.`
        resetButton();
    } else if (computerScore === 5) {
        gameEnd = true;
        result.textContent = `You lost in ${counter } rounds.`
        resetButton();
    }

    gameCounter.textContent = `Your score is ${humanScore}. Your opponent's score is ${computerScore}`;    

}

function resetButton () {
    const resetButton = document.createElement("button");
    resetButton.textContent = `Reset game?`;
    resultField.appendChild(resetButton);

    resetButton.addEventListener("click", function() {
        humanScore = 0, computerScore = 0, counter = 1;
        gameEnd = false;
        updateText();
        resultField.removeChild(resetButton);
    });
}


document.addEventListener("click", function(button) {
    if (!gameEnd) {
        switch (button.target.id) {
            case "rock":
                playRound("rock", getComputerChoice());
                updateText();
                break;
            case "paper":
                playRound("paper", getComputerChoice());
                updateText();
                break;
            case "scissors":
                playRound("scissors", getComputerChoice());
                updateText();
                break;
            default:
                break;
        };
    };
});


function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        result.textContent = `You tie round ${counter}.`;
        counter++;
        return;
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result.textContent = `You win round ${counter}. ${humanChoice} 
                            beats ${computerChoice}`;
        humanScore++;
        counter++;
        return;
    } else {
        result.textContent = `You lose round ${counter}. ${computerChoice}
                            beats ${humanChoice}`;
        computerScore++;
        counter++;
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




