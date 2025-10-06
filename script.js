/* 

*/
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

// Initialize score variables for user and computer
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice)
{
    let formattedHumanChoice = humanChoice.toLowerCase();
    const rock = "rock";
    const paper = "paper";
    const scissors = "scissors";

    if(formattedHumanChoice == computerChoice)
    {
        return "Try Again! You both chose the same thing!";
    } else if(formattedHumanChoice == rock && computerChoice == paper)
    {
        computerScore++;
        return "You lose! Paper beats Rock";
    } else if(formattedHumanChoice == rock && computerChoice == scissors)
    {
        humanScore++;
        return "You win! Rock beats Scissors";
    } else if(formattedHumanChoice == paper && computerChoice == scissors)
    {
        computerScore++;
        return "You lose! Scissors beats Paper";
    } else if(formattedHumanChoice == paper && computerChoice == rock)
    {
        humanScore++;
        return "You win! Paper beats Rock";
    } else if(formattedHumanChoice == scissors && computerChoice == rock)
    {
        computerScore++;
        return "You lose! Rock beats Scissors";
    } else if(formattedHumanChoice == scissors && computerChoice == paper)
    {
        humanScore++;
        return "You win! Scissors beats Paper";
    }

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);