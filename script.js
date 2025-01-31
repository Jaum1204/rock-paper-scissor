const btn_r = document.querySelector("#rock")
const btn_p = document.querySelector("#paper")
const btn_s = document.querySelector("#scissors")

const content = document.querySelector("#content")
const winner = document.querySelector("#winner")

content.setAttribute('style', 'white-space: pre;');

function getComputerChoice(){
    let choice = Math.random();
    if(choice <= 0.33){
        choice = "rock"
    } else if (choice <= 0.66){
        choice = "paper"
    } else{
        choice = "scissors"
    }
    return choice
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

let going = true;

function PlayGame(HC,round){
    
    let HumanChoice = HC;
    let CompChoice = getComputerChoice();
    
    content.textContent = `Round ${round}\r\n`;
    content.textContent += `You chose ${HumanChoice} / Computer chose ${CompChoice}\r\n`

    if (PlayRound(HumanChoice,CompChoice) === true){
        PlayerScore++;
        content.textContent += `Player wins this round!\r\n`
    }else if (PlayRound(HumanChoice,CompChoice) === false){
        CompScore++;
        content.textContent += `Computer wins this round!\r\n`
    }else{
        content.textContent += `Draw!\r\n`
    }
    
    content.textContent += `Player: ${PlayerScore} / Computer: ${CompScore}`

    if(PlayerScore >= 5){
        content.textContent = "\r\nPlayer Wins!";
        content.style.color = "green"
        going = false;
    } else if(CompScore >= 5){
        content.textContent = "\r\nComputer Wins!";
        content.style.color = "red"
        going = false;
    }
}


let PlayerScore = 0;
let CompScore = 0;
let round = 1;
btn_r.addEventListener("click", () => {
    if (going){
        PlayGame("rock", round);
        round++;
    }
});
btn_p.addEventListener("click", () => {
    if (going){
        PlayGame("paper", round);
        round++;
    }
});
btn_s.addEventListener("click", () => {
    if (going){
        PlayGame("scissors", round);
        round++;
    }
});

