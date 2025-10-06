// Randomly returns one of three string values: rock, paper, scissors
function getComputerChoice()
{
    let selection = Math.random();
    if(selection >= 0 && selection < 0.33)
    {
        return "rock";
    } else if(selection >= 0.33 && selection < 0.66)
    {
        return "scissors";
    } else return "paper";
}

// Prompts user to input one of three choices: rock, paper, or scissors
// Assumes user inputs values correctly, returns string
function getHumanChoice() 
{
    return prompt("Please enter rock, paper, or scissors: ");
}

    let humanSelection = "";
    let computerSelection = "";


function playGame() {
    // Initialize score variables for user and computer
    let humanScore = 0;
    let computerScore = 0;

    // Compares user and computer input, returns string stating outcome of round
    function playRound(humanChoice, computerChoice) {

        let formattedHumanChoice = humanChoice.toLowerCase();
        const rock = "rock";
        const paper = "paper";
        const scissors = "scissors";

        if (formattedHumanChoice == computerChoice) {
            console.log("Try Again! You both chose the same thing!");
            return "draw";
        } else if (formattedHumanChoice == rock && computerChoice == paper) {
            console.log("You lose! Paper beats Rock");
            return "loss";
        } else if (formattedHumanChoice == rock && computerChoice == scissors) {
            console.log("You win! Rock beats Scissors");
            return "win";
        } else if (formattedHumanChoice == paper && computerChoice == scissors) {
            console.log("You lose! Scissors beats Paper");
            return "loss";
        } else if (formattedHumanChoice == paper && computerChoice == rock) {
            console.log("You win! Paper beats Rock");
            return "win";
        } else if (formattedHumanChoice == scissors && computerChoice == rock) {
            console.log("You lose! Rock beats Scissors");
            return "loss";
        } else if (formattedHumanChoice == scissors && computerChoice == paper) {
            console.log("You win! Scissors beats Paper");
            return "win";
        }
    }
    function determineScore(result, humanScore, computerScore)
    {
        if(result == "win")
        {
            humanScore++;
        } else if (result == "loss")
        {
            computerScore++;
        }

        return [humanScore, computerScore];
    }
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    let result = playRound(humanSelection, computerSelection);
    [humanScore, computerScore] = determineScore(result, humanScore, computerScore);

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    result = playRound(humanSelection, computerSelection);
    [humanScore, computerScore] = determineScore(result, humanScore, computerScore);

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    result = playRound(humanSelection, computerSelection);
    [humanScore, computerScore] = determineScore(result, humanScore, computerScore);

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    result = playRound(humanSelection, computerSelection);
    [humanScore, computerScore] = determineScore(result, humanScore, computerScore);

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    result = playRound(humanSelection, computerSelection);
    [humanScore, computerScore] = determineScore(result, humanScore, computerScore);

    if(humanScore > computerScore)
    {
        console.log("Congratulations! You won!");
    } else if (computerScore > humanScore)
    {
        console.log("Better luck next time! You lost!");
    } else {
        console.log("It's a tie! Play again?")
    }

}

playGame();