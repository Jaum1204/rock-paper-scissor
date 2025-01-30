function getComputerChoice(){
    let choice = Math.random();
    if(choice < 0.33){
        choice = "rock"
    } else if (choice < 0.66){
        choice = "paper"
    } else{
        choice = "scissors"
    }
    return choice
}

function getHumanChoice(){
    let choice = prompt("Enter choice (Rock, Paper or Scissors): ")
    return choice;
}

function PlayRound(HumanChoice, CompChoice){
    HumanChoice = HumanChoice.toLowerCase()

    if(HumanChoice === CompChoice){
        return "Draw";
    } else if (
        (HumanChoice === "rock" && CompChoice === "scissors") ||
        (HumanChoice === "paper" && CompChoice === "rock") ||
        (HumanChoice === "scissors" && CompChoice === "paper")
    ){
            return true;
    } else{
        return false;
    }
}

function PlayGame(){
    let PlayerScore = 0;
    let CompScore = 0;

    for (let i = 0; i < 5; i ++){
        let HumanChoice = getHumanChoice();
        let CompChoice = getComputerChoice();

        console.log(`You chose ${HumanChoice}\nComputer chose ${CompChoice}`)

        if (PlayRound(HumanChoice,CompChoice) === true){
            PlayerScore++;
            console.log(`Player wins this round!\nTotal score:\nPlayer: ${PlayerScore}\nComputer: ${CompScore}`)
        }else if (PlayRound(HumanChoice,CompChoice) === false){
            CompScore++;
            console.log(`Computer wins this round!\nTotal score:\nPlayer: ${PlayerScore}\nComputer: ${CompScore}`)
        }else{
            console.log(`Draw!\nTotal score:\nPlayer: ${PlayerScore}\nComputer: ${CompScore}`)
        }
    }
    console.log("END OF GAME")
    if (PlayerScore > CompScore){
        console.log("Player Won!")
    } else if (CompScore > PlayerScore){
        console.log("Computer Won!")
    }else{
        console.log("Draw")
    }
}

PlayGame();