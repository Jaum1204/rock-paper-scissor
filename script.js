let HumanScore = 0;
let ComputerScore = 0;

function getComputerChoice(){
    let choice = Math.random();
    return choice
}

function getHumanChoice(){
    let choice = prompt("Enter choice (Rock, Paper or Scissors): ")
    return choice;
}

console.log(getHumanChoice())