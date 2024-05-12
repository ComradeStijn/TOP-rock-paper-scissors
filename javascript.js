const CHOICES = ["rock", "paper", "scissors"];

let humanScore = 0, computerScore = 0;




function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("You tie!");
        return;
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        console.log(`You win, ${humanChoice} beats ${computerChoice}`);
        humanScore++;
        return;
    } else {
        console.log(`You lose, ${computerChoice} beats ${humanChoice}`);
        computerScore++;
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


function getHumanChoice() {
    let choice;
    do {
        choice = prompt("Choose rock.paper.scissors: ").toLowerCase();
    } while (!CHOICES.includes(choice)); 
    return choice;
}



