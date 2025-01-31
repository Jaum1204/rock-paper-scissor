const btn_r = document.querySelector("#rock")
const btn_p = document.querySelector("#paper")
const btn_s = document.querySelector("#scissors")

const cont_round = document.querySelector(".round")
const cont_choices = document.querySelector(".choices")
const cont_round_win = document.querySelector(".round_win")
const cont_total_score = document.querySelector(".total_score")



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

function PlayGame(HC,round){
    
    let HumanChoice = HC;
    let CompChoice = getComputerChoice();
    
    cont_round.textContent = `Round ${round}`;
    cont_choices.textContent = `You chose ${HumanChoice} / Computer chose ${CompChoice}`

    if (PlayRound(HumanChoice,CompChoice) === true){
        PlayerScore++;
        cont_round_win.textContent = `Player wins this round!`
    }else if (PlayRound(HumanChoice,CompChoice) === false){
        CompScore++;
        cont_round_win.textContent = `Computer wins this round!`
    }else{
        cont_round_win.textContent = `Draw!`
    }
    
    cont_total_score.textContent = `Player: ${PlayerScore} / Computer: ${CompScore}`
}


let PlayerScore = 0;
let CompScore = 0;
let round = 1;
btn_r.addEventListener("click", () => {
    PlayGame("rock", round);
    round++;
});
btn_p.addEventListener("click", () => {
    PlayGame("paper", round);
    round++
});
btn_s.addEventListener("click", () => {
    PlayGame("scissors", round);
    round++;
});

if(PlayerScore === 5){
   
} else if(CompScore === 5){}
