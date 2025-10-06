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


